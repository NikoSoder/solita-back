const tripsRouter = require("express").Router();

const { Trip } = require("../models");

tripsRouter.get("/", async (req, res) => {
  const trips = await Trip.findAll({ limit: 10 });
  res.json(trips);
});

tripsRouter.get("/:id", async (req, res) => {
  req.trip = await Trip.findByPk(req.params.id);
  if (req.trip) {
    res.json(req.trip);
  } else {
    res.status(404).end();
  }
});

module.exports = tripsRouter;
