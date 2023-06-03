const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const tripsRouter = require("./controllers/trips");
const stationsRouter = require("./controllers/stations");
const statisticsRouter = require("./controllers/statistics");

app.use(express.json());

app.use("/api/trips", tripsRouter);
app.use("/api/stations", stationsRouter);
app.use("/api/statistics", statisticsRouter);

module.exports = app;
