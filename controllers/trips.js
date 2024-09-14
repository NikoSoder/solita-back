const tripsRouter = require("express").Router();
const { Trip } = require("../models");
const { Station } = require("../models");
let LIMIT = 10;
let PAGE = 0;

tripsRouter.get("/", async (req, res) => {
  PAGE = Number(req.query.page) || 0;
  LIMIT = Number(req.query.limit) || 10;
  try {
    const rowsToSkip = PAGE * LIMIT;
    const totalPageCount = Math.trunc((await Trip.count()) / LIMIT);
    if (PAGE < 0 || PAGE > totalPageCount) {
      throw new Error("Invalid page number");
    }
    const trips = await Trip.findAll({
      attributes: [
        "id",
        "departure_station_name",
        "return_station_name",
        "covered_distance",
        "duration",
      ],
      offset: rowsToSkip,
      limit: LIMIT,
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
    const station = await Station.findOne({
      where: { id: stationId },
      attributes: ["id", "nimi", "osoite", "x", "y"],
    });
    if (!station) {
      throw new Error("Invalid station id");
    }

    const departureCount = await Trip.count({
      where: { departure_station_id: stationId },
    });
    const returnCount = await Trip.count({
      where: { return_station_id: stationId },
    });

    res.json({
      station: station,
      statistics: {
        departureCount: departureCount,
        returnCount: returnCount,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = tripsRouter;
