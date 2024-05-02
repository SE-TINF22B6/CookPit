// database.cjs
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtkey = crypto.randomBytes(32).toString('hex');
console.log(jwtkey);


function Database(app) {

    const db = new sqlite3.Database('./account.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
            //createTables();
        }
      });

    function hashPassword(password) {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        return hash.digest('hex'); // Rückgabe des gehashten Passworts als Hexadezimalzeichenfolge
    }

    function createTables() {
        db.run(`CREATE TABLE Image (
            id_image INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for an image
            file_location TEXT, -- Path or URL of the image file
            name TEXT -- Name of the image
        )`);
    }

    // Register in DB
    app.post("/register", (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        password = hashPassword(password);

        insertData(username, password, () => {
            res.send({ loginmessage: "Benutzer erfolgreich erstellt" });
        });
    });

    function insertData(username, password, callback) {
        let sql = 'INSERT INTO account (username, password) VALUES (?, ?)';
        let params = [username, password];
        db.run(sql, params, function(err) {
            if (err) {
                console.error("Fehler beim Einfügen von Daten: " + err.message);
            } else {
                console.log(`Datensatz hinzugefügt mit der ID ${this.lastID}.`);
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
    }

    // Login
    app.post("/login", (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        password = hashPassword(password);
        login(username, password, res)
        });


        function login(username, password, res) {
            db.get("SELECT * FROM account WHERE username = ? AND password = ?",
                [username, password],
                (err, result) => {
                    if (err) {
                        res.send({ loginmessage: err });
                        return;
                    } else if (result) {
                        const token = jwt.sign({ username: username }, jwtkey, {expiresIn: "24h"} );
                        res.send({ loginmessage: "Erfolgreich eingeloggt" });
                        console.log('User "' + username + '" eingeloggt');
                    } else {
                        res.send({ loginmessage: "Der Nutzername stimmt nicht mit dem Passwort überein" });
                        console.log('User "' + username + '" existiert nicht');
                    }
                }
            );
        };
}

module.exports = Database;
