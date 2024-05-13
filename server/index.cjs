require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const KEY = process.env.OPENAI_API_KEY;

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/recipe-maker", async (req, res) => {
  console.log("[openai] Empfangene Daten:", req.body);
  try {
    const importedModule = await import("./openai-test.mjs");
    const { callOpenAIapi } = importedModule;
    const result = await callOpenAIapi(req.body, KEY);
    res.json({ result });
  } catch (error) {
    console.error("Fehler beim Importieren:", error);
    res.status(500).send("Interner Serverfehler");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Datenbank erstellung, initalisierung usw.
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(
  "./account.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error("Fehler beim Öffnen der Datenbank: " + err.message);
    } else {
      console.log("Datenbank erfolgreich geöffnet.");
      createTables();
    }
  }
);

function createTables() {
  db.run(
    "CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)",
    (err) => {
      if (err) {
        console.error("Fehler beim Erstellen der Tabelle: " + err.message);
      } else {
        console.log("Tabelle 'account' erfolgreich erstellt.");
      }
    }
  );
}

function insertData() {
  let sql = "INSERT INTO account (username, password) VALUES (?, ?)";
  let params = ["Fred", "01231245"];
  db.run(sql, params, function (err) {
    if (err) {
      console.error("Fehler beim Einfügen von Daten: " + err.message);
    } else {
      console.log(`Datensatz hinzugefügt mit der ID ${this.lastID}.`);
    }
  });
}

// Register in DB
app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.run(
    "INSERT INTO account (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
      if (err && err.code === 'SQLITE_CONSTRAINT') {
        console.error("Benutzername bereits vorhanden:", err.message);
        res.send({loginmessage: "Benutzername bereits vorhanden"})
      } else if (err) {
        console.error("Fehler beim Einfügen der Daten:", err.message);
        res.status(500).send("Interner Serverfehler.");
      } else {
        console.log("Daten erfolgreich eingefügt.");
        res.send({loginmessage: "Benutzer erfolgreich erstellt"})
      }
    }
  );
});

// Login
app.post("/login", (req, res) => {

  let username = req.body.username;
  let password = req.body.password;

  db.get(
    "SELECT * FROM account WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ loginmessage: err });
        return;
      }
      if (result) {
        res.send({ loginmessage: "Erfolgreich eingeloggt" });
        console.log('User "' + username + '" eingeloggt');
      } else {
        res.send({
          loginmessage: "Der Nutzername stimmt nicht mit dem Passwort überein",
        });
        console.log('User "' + username + '" existiert nicht');
      }
    }
  );
});

function addrecipe(recipeheader, recipecategory, recipetimeeffort, recipestars, recipedescription) {
  db.run(
    "INSERT INTO account (recipeheader, recipecategory, recipetimeeffort, recipestars, recipedescription) VALUES (?, ?, ?, ?, ?)",
    [recipeheader, recipecategory, recipetimeeffort, recipestars, recipedescription],
    (err, result) => {
      if (err && err.code === 'SQLITE_CONSTRAINT') {
        console.error("Benutzername bereits vorhanden:", err.message);
        res.send({loginmessage: "Benutzername bereits vorhanden"})
      } else if (err) {
        console.error("Fehler beim Einfügen der Daten:", err.message);
        res.status(500).send("Interner Serverfehler.");
      } else {
        console.log("Daten erfolgreich eingefügt.");
        res.send({loginmessage: "Benutzer erfolgreich erstellt"})
      }
    }
  );
}

app.post("/addrecipe", (req, res) => {
  const recipeheader = req.body.recipeheader;
  const recipecategory = req.body.recipecategory;
  const recipetimeeffort = req.body.recipetimeeffort;
  const recipestars = req.body.recipestars;
  const recipedescription = req.body.recipedescription
  const recipepicture = req.body.recipepicture
  console.log(recipeheader, recipecategory, recipetimeeffort,recipestars,recipedescription)
  //addrecipe(recipeheader, recipecategory, recipetimeeffort,recipestars,recipedescription, recipepicture)
  res.send({recipeheader, recipecategory, recipetimeeffort, recipestars, recipedescription, recipepicture})
  }
)


