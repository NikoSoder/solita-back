const stationsRouter = require("express").Router();

const { Station } = require("../models");

stationsRouter.get("/", async (req, res) => {
  const stations = await Station.findAll({ limit: 20 });
  res.json(stations);
});

stationsRouter.get("/:id", async (req, res) => {
  req.station = await Station.findByPk(req.params.id);
  if (req.station) {
    res.json(req.station);
  } else {
    res.status(404).end();
  }
});

module.exports = stationsRouter;