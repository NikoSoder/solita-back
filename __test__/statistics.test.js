const request = require("supertest");
const app = require("../index");

describe("testing statistics api requests", function () {
  /* /api/statistics */
  it("returns array of busiest stations", async function () {
    const response = await request(app)
      .get("/api/statistics")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body.busiestStations.length).toBe(5);
    expect(response.body.busiestStations[0].station_id).toBeDefined();
    expect(response.body.busiestStations[0].station_name).toBeDefined();
    expect(response.body.busiestStations[0].num_journeys).toBeDefined();
  });
});
