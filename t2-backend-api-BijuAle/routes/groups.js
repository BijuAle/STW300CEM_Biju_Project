var express = require("express");
var Groups = require("../models/groups");
var Members = require("../models/users");

var router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    Groups.find({})
      /* .populate("members") */
      .then(
        groups => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(groups);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Groups.create(req.body)
      .then(
        group => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(group);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

router
  .route("/:id/members")
  .get((req, res, next) => {
    Groups.findById(req.params.id)
      .then(
        user => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    Groups.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, useFindAndModify: false }
    )
      .then(
        group => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(hero);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

module.exports = router;
