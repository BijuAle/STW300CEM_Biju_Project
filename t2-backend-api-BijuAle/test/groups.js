process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Marker = require("../models/groups");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /GET route (Get all groups)
 */

describe("/GET groups", () => {
  it("it should GET all groups", done => {
    chai
      .request(server)
      .get("/groups")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        /* res.body.length.should.be.eql(5); */
        done();
      });
  });
});

/*
 * Test the /POST route (Create a group)
 */

describe("/POST /groups", () => {
  it("it should create a new group", done => {
    let group = {
        "name": "asdasd",
        "desc": "asd",
        "image": "",
        "members": ""
    };
    chai
      .request(server)
      .post("/groups")
      .send(group)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

/*
 * Test the /GET/:id route (Get a group)
 */

describe("/GET/:id groups", () => {
  it("it should GET a group by the given id", done => {
    let group_id = "5d241b35f568770c5f800b70";
    chai
      .request(server)
      .get("/groups/" + group_id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

/*
 * Test the /PUT/:id route
 */
describe("/PUT/:id groups", () => {
  it("it should UPDATE a group given the id", done => {
    let group = {
        name: "asdasd",
        desc: "asd",
        image: "",
        members: ""
      };
    group.save((err, groups) => {
      chai
        .request(server)
        .put("/groups/" + group.id)
        .send({ name: "sdf", desc: "adas", image: "", members:"sads" })
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
describe("/DELETE/:id groups", () => {
  it("it should DELETE a group given the id", done => {
    let group = new group({
        name: "asdasd",
        desc: "asd",
        image: "",
        members: ""
      });
    group.save((err, group) => {
      chai
        .request(server)
        .delete("/groups/" + group.id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
