const tripsRouter = require("express").Router();
const { Trip } = require("../models");
const { Station } = require("../models");
const limit = 10;

tripsRouter.get("/:page", async (req, res) => {
  const page = Number(req.params.page);
  try {
    const rowsToSkip = page * limit;
    const totalPageCount = Math.trunc((await Trip.count()) / limit);
    if (page < 0 || page > totalPageCount) {
      throw new Error("Invalid page number");
    }
    const trips = await Trip.findAll({
      offset: rowsToSkip,
      limit: limit,
      order: [["id", "ASC"]],
    });
    res.json({ trips, totalPageCount });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

tripsRouter.get("/stats/:stationId", async (req, res) => {
  const stationId = req.params.stationId;
  try {
    const station = await Station.findOne({ where: { id: stationId } });
    if (!station) {
      throw new Error("Invalid station id");
    }
    const departureCount = await Trip.count({
      where: { departure_station_id: stationId },
    });
    const returnCount = await Trip.count({
      where: { return_station_id: stationId },
    });

    res.json({ departureCount: departureCount, returnCount: returnCount });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = tripsRouter;
