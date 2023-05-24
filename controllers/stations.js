const stationsRouter = require("express").Router();

const { Station } = require("../models");

stationsRouter.get("/", async (req, res) => {
  const stations = await Station.findAll();
  res.json(stations);
});

module.exports = stationsRouter;
