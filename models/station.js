const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Station extends Model {}

Station.init(
  {
    fid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nimi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    namn: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    osoite: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    kaupunki: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stad: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    operaattor: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    kapasiteet: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    x: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    y: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "station",
  }
);

module.exports = Station;
