const sqlite3 = require('sqlite3').verbose();

function dbcreate() {
    const db = new sqlite3.Database('./Cookpit.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
        }
    });

    // Table to store user information
    db.run(`CREATE TABLE IF NOT EXISTS User (
        id_user INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a user
        username TEXT, -- User's username
        password TEXT -- User's password
    )`);

    // Table to store recipe information
    db.run(`CREATE TABLE IF NOT EXISTS Recipe (
        id_recipe INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a recipe
        name TEXT, -- Name of the recipe
        description TEXT, -- Brief description of the recipe
        time TEXT, -- Preparation time for the recipe
        id_author INTEGER, -- ID of the author (user) who created the recipe
        ingredients TEXT, -- Ingredients of the recipe in JSON format
        creation_date TEXT, -- Date and time when the recipe was created
        rating REAL, -- Rating or score of the recipe
        category TEXT, -- Category of the recipe
        picture TEXT, -- Picture in base64 of recipe
        FOREIGN KEY (id_author) REFERENCES User(id_user)
    )`);

    db.close((err) => {
        if (err) {
            console.error("Fehler beim Schließen der Datenbank: " + err.message);
        } else {
            console.log("Datenbankverbindung geschlossen.");
        }
    });
}

module.exports = dbcreate;
