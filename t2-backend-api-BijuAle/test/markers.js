process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Marker = require("../models/markers");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /GET route (Get all makers)
 */

describe("/GET markers", () => {
  it("it should GET all markers", done => {
    chai
      .request(server)
      .get("/markers")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        /* res.body.length.should.be.eql(5); */
        done();
      });
  });
});

/*
 * Test the /POST route (Create a marker)
 */

describe("/POST /markers", () => {
  it("it should create a new marker", done => {
    let marker = {
      lat: "12",
      lng: "24",
      markerInfo: "Test Marker"
    };
    chai
      .request(server)
      .post("/markers")
      .send(marker)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

/*
 * Test the /GET/:id route (Get a marker)
 */

describe("/GET/:id marker", () => {
  it("it should GET a marker by the given id", done => {
    let marker_id = "5d05bd07082e263e6e3d78cf";
    chai
      .request(server)
      .get("/markers/" + marker_id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

/*
 * Test the /PUT/:id route
 */
describe("/PUT/:id markers", () => {
  it("it should UPDATE a maker given the id", done => {
    let marker = new Marker({
      lat: "123123",
      lng: "123123",
      markerInfo: "POPO"
    });
    marker.save((err, marker) => {
      chai
        .request(server)
        .put("/markers/" + marker.id)
        .send({ lat: "345345", lng: "123123", markerInfo: "POPO" })
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
describe("/DELETE/:id markers", () => {
  it("it should DELETE a marker given the id", done => {
    let marker = new Marker({
      lat: "123123",
      lng: "123123",
      markerInfo: "POPO"
    });
    marker.save((err, marker) => {
      chai
        .request(server)
        .delete("/markers/" + marker.id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
