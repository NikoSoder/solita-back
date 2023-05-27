const statisticsRouter = require("express").Router();
const { sequelize } = require("../utils/db");

statisticsRouter.get("/", async (req, res) => {
  const { QueryTypes } = require("sequelize");
  const busiestStations = await sequelize.query(
    `SELECT station_id, station_name, COUNT(*) as num_journeys 
     FROM (SELECT departure_station_id AS station_id, departure_station_name AS station_name FROM trips 
     UNION ALL SELECT return_station_id AS station_id, return_station_name AS station_name FROM trips) 
     AS combined_stations GROUP BY station_id, station_name 
     ORDER BY num_journeys DESC LIMIT 5;`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({ busiestStations: busiestStations });
});

module.exports = statisticsRouter;
