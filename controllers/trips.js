const tripsRouter = require("express").Router();
const { Trip } = require("../models");
const limit = 10;

tripsRouter.get("/", async (req, res) => {
  try {
    const totalPageCount = Math.trunc((await Trip.count()) / limit);
    const trips = await Trip.findAll({ limit: 10, order: [["id", "ASC"]] });
    res.json({ trips, totalPageCount });
  } catch (error) {
    console.error(error);
  }
});

tripsRouter.get("/:page", async (req, res) => {
  const page = Number(req.params.page);
  const rowsToSkip = page * limit;
  const totalPageCount = Math.trunc((await Trip.count()) / limit);

  try {
    const trips = await Trip.findAll({
      offset: rowsToSkip,
      limit: limit,
      order: [["id", "ASC"]],
    });
    res.json({ trips, totalPageCount });
  } catch (error) {
    console.error(error);
  }
});

tripsRouter.get("/stats/:stationId", async (req, res) => {
  const station = req.params.stationId;
  try {
    const departureCount = await Trip.count({
      where: { departure_station_id: station },
    });
    const returnCount = await Trip.count({
      where: { return_station_id: station },
    });

    res.json({ departureCount: departureCount, returnCount: returnCount });
  } catch (error) {
    console.error(error);
  }
});

module.exports = tripsRouter;
