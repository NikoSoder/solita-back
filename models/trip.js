const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departure: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    return: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    departure_station_id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    departure_station_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    return_station_id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    return_station_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    covered_distance: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "trip",
  }
);

module.exports = Trip;
