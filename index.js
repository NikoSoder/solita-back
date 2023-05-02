const express = require("express");
const config = require("./utils/config");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const Pool = require("pg").Pool;
const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE,
  password: config.PASSWORD,
  port: config.DATABASE_PORT,
});

app.get("/", (request, response) => {
  pool.query("SELECT * FROM stations", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

const port = config.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
