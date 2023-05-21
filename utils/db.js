const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.DATABASE_URL);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("database connected");
  } catch (err) {
    console.log("connecting database failed");
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
