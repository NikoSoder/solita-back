const stationsRouter = require("express").Router();

const { Station } = require("../models");

stationsRouter.get("/", async (req, res) => {
  const PAGE = Number(req.query.page) || 0;
  const LIMIT = Number(req.query.limit) || 15;
  try {
    const rowsToSkip = PAGE * LIMIT;
    const totalPageCount = Math.trunc((await Station.count()) / LIMIT);

    if (PAGE < 0 || PAGE > totalPageCount) {
      return res.json({ data: [] });
    }

    const stations = await Station.findAll({
      attributes: ["id", "nimi", "osoite", "x", "y"],
      offset: rowsToSkip,
      limit: LIMIT,
      order: [["nimi", "ASC"]],
    });

    res.json({ data: stations });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = stationsRouter;
