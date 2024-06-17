const databasecreate = require("./Database/db-create.cjs");

describe("databasecreate", () => {
  it("should create the database", () => {
    // Mock the app object
    const app = {};

    // Call the databasecreate function
    databasecreate(app);

    // Assert that the database is created
    expect(app.databaseCreated).toBe(true);
  });
});
