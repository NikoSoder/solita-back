require("dotenv").config();

let USER = process.env.USER;
let HOST = process.env.HOST;
let DATABASE = process.env.DATABASE;
let PASSWORD = process.env.PASSWORD;
let DATABASE_PORT = process.env.DATABASE_PORT;
let PORT = process.env.PORT;

module.exports = {
  USER,
  HOST,
  DATABASE,
  PASSWORD,
  DATABASE_PORT,
  PORT,
};
