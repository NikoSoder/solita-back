const statisticsRouter = require("express").Router();
const { sequelize } = require("../utils/db");

statisticsRouter.get("/", async (req, res) => {
  const { QueryTypes } = require("sequelize");
  const busiestStations = await sequelize.query(
    // TODO: ??? clean this up
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

statisticsRouter.get(
  "/peaktime/station/:stationId/weekday/:weekDay",
  async (req, res) => {
    try {
      const STATIONID = req.params.stationId;
      const DAYOFTHEWEEK = req.params.weekDay;

      const { QueryTypes } = require("sequelize");
      const peakTimes = await sequelize.query(
        `
      SELECT
        trips.departure_station_id AS station_id,
        EXTRACT(DOW FROM CAST(trips.departure AS TIMESTAMP)) AS day_of_week,
        EXTRACT(HOUR FROM CAST(trips.departure AS TIMESTAMP)) AS hour_of_day,
        COUNT(trips.id) AS departures
      FROM
        trips
      WHERE
        trips.departure_station_id = ?
      AND EXTRACT(DOW FROM CAST(trips.departure AS TIMESTAMP)) = ?
        AND EXTRACT(HOUR FROM CAST(trips.departure AS TIMESTAMP)) BETWEEN 9 AND 21
      GROUP BY
        trips.departure_station_id, day_of_week, hour_of_day
      ORDER BY
        day_of_week, hour_of_day;
      `,
        {
          replacements: [STATIONID, DAYOFTHEWEEK],
          type: QueryTypes.SELECT,
        }
      );

      res.json(peakTimes);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }
  }
);

module.exports = statisticsRouter;
