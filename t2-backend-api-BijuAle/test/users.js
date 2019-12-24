process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("../models/users");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /GET route (Get user session)
 */

describe("/GET users", () => {
  it("it should GET current logged in user", done => {
    chai
      .request(server)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

/*
 * Test the /POST route (User Registration)
 */

describe("/POST users/signup", () => {
  it("it should register a new user", done => {
    let user = {
      username: "john",
      password: "john",
      firstName: "John",
      lastName: "Smith",
      address: "KTM",
      email: "john@john.com"
    };
    chai
      .request(server)
      .post("users/signup")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

/*
 * Test the /PUT/:id route
 */
describe("/PUT/:id users", () => {
  it("it should UPDATE a user given the id", done => {
    let user = new User({
      username: "john",
      password: "john",
      firstName: "John",
      lastName: "Smith",
      address: "KTM",
      email: "john@john.com"
    });
    user.save((err, user) => {
      chai
        .request(server)
        .put("/users/" + user.id)
        .send({"firstName": "asdasd"})
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

/*
 * Test the /DELETE/:id route
 */
describe("/DELETE/:id users", () => {
  it("it should DELETE a user given the id", done => {
    let user = new User({
      username: "aajohn",
      password: "john",
      firstName: "John",
      lastName: "Smith",
      address: "KTM",
      email: "john@john.com"
    });
    user.save((err, user) => {
      chai
        .request(server)
        .delete("/users/" + user.id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
