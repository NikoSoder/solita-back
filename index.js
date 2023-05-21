const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const tripsRouter = require("./controllers/trips");
const stationsRouter = require("./controllers/stations");

app.use(express.json());

app.use("/api/trips", tripsRouter);
app.use("/api/stations", stationsRouter);

module.exports = app;
