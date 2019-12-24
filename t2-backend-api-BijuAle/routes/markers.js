var express = require("express");
var Markers = require("../models/markers");
var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Markers.find({})
      .then(
        markers => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(markers);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Markers.create(req.body)
      .then(
        marker => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(marker);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!");
  })
  .delete((req, res, next) => {
    Markers.deleteMany({})
      .then(
        reply => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(reply);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    Markers.findById(req.params.id)
      .then(
        marker => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(marker);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported!");
  })
  .put((req, res, next) => {
    Markers.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, useFindAndModify: false }
    )
      .then(
        marker => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(marker);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Markers.findByIdAndDelete(req.params.id)
      .then(
        reply => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(reply);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = router;
