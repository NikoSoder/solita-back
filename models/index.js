const Trip = require("./trip");
const Station = require("./station");

// create tables if not exists
Trip.sync();
Station.sync();

module.exports = {
  Trip,
  Station,
};
