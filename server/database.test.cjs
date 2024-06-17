const Database = require("./database.cjs");

describe("Database", () => {
  let app;
  let database;

  beforeEach(() => {
    app = {
      post: jest.fn(),
    };
    database = new Database(app);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should register a user", () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const res = {
      send: jest.fn(),
    };

    database.insertUser = jest.fn((username, password, callback) => {
      callback();
    });

    app.post.mockImplementationOnce((path, callback) => {
      callback(req, res);
    });

    expect(app.post).toHaveBeenCalledTimes(1);
    expect(app.post).toHaveBeenCalledWith("/register", expect.any(Function));

    expect(database.insertUser).toHaveBeenCalledTimes(1);
    expect(database.insertUser).toHaveBeenCalledWith(
      "testuser",
      expect.any(String),
      expect.any(Function)
    );

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      loginmessage: "Benutzer erfolgreich erstellt",
    });
  });

  it("should log in a user", () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const res = {
      send: jest.fn(),
    };

    database.login = jest.fn((username, password, response) => {
      response.send({
        loginmessage: "Erfolgreich eingeloggt",
        token: "testtoken",
        success: true,
      });
    });

    app.post.mockImplementationOnce((path, callback) => {
      callback(req, res);
    });

    expect(app.post).toHaveBeenCalledTimes(1);
    expect(app.post).toHaveBeenCalledWith("/login", expect.any(Function));

    expect(database.login).toHaveBeenCalledTimes(1);
    expect(database.login).toHaveBeenCalledWith(
      "testuser",
      expect.any(String),
      res
    );

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      loginmessage: "Erfolgreich eingeloggt",
      token: "testtoken",
      success: true,
    });
  });

  // Add more test cases for other methods...
});
