const request = require("supertest");
const app = require("../index");

describe("testing stations api requests", function () {
  /* /api/stations */
  it("returns array of stations", async function () {
    const response = await request(app)
      .get("/api/stations")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body[0].id).toBe("501");
    expect(response.body[0].id).not.toBe(501);
  });
});
