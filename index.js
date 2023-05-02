const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

const tripsRouter = require("./controllers/trips");
const stationsRouter = require("./controllers/stations");

app.use(express.json());

app.use("/api/trips", tripsRouter);
app.use("/api/stations", stationsRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
