const request = require("supertest");
const app = require("../index");

describe("testing trips api requests", function () {
  /* /api/trips/page */
  it("should return second trips page and totapagecount", async function () {
    const response = await request(app)
      .get("/api/trips/1")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body.trips.length).toEqual(10);
    expect(response.body.trips[0].id).toBe(11);
    expect(response.body.totalPageCount).toBeDefined();
  });
  /* /api/trips/page */
  it("should return 'Invalid page number' error message", async function () {
    const response = await request(app)
      .get("/api/trips/-1")
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body.trips).not.toBeDefined();
    expect(response.body.totalPageCount).not.toBeDefined();
    expect(response.body.error).toBe("Invalid page number");
  });
  /* /api/trips/page */
  it("should return 'Invalid page number' error message", async function () {
    const response = await request(app)
      .get("/api/trips/500000")
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body.trips).not.toBeDefined();
    expect(response.body.totalPageCount).not.toBeDefined();
    expect(response.body.error).toBeDefined();
    expect(response.body.error).toBe("Invalid page number");
  });
  /* /api/trips/stats/stationId */
  it("should return info about station", async function () {
    const response = await request(app)
      .get("/api/trips/stats/501")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body.departureCount).toBeDefined();
    expect(response.body.returnCount).toBeDefined();
    expect(response.body.departureCount).toBe(4930);
    expect(response.body.returnCount).toBe(5072);
  });
  /* /api/trips/stats/stationId */
  it("should return 'Invalid station id' error message", async function () {
    const response = await request(app)
      .get("/api/trips/stats/502")
      .set("Accept", "application/json");

    expect(response.status).toEqual(404);
    expect(response.body.error).toBeDefined();
    expect(response.body.returnCount).not.toBeDefined();
    expect(response.body.departureCount).not.toBeDefined();
    expect(response.body.error).toBe("Invalid station id");
  });
});
