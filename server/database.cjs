// database.cjs
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtkey = crypto.randomBytes(32).toString('hex');
console.log(jwtkey);


function Database(app) {
    // Datenbankerstellung, Initialisierung usw.
    const db = new sqlite3.Database('./account.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
            createTables();
        }
    });

    function createTables() {
        db.run('CREATE TABLE IF NOT EXISTS account(id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)', (err) => {
            if (err) {
                console.error("Fehler beim Erstellen der Tabelle: " + err.message);
            } else {
                console.log("Tabelle 'account' erfolgreich erstellt.");
                //insertData();
            }
        });
    }

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

    // Register in DB
    app.post("/register", (req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        insertData(username, password, () => {
            res.send({ loginmessage: "Benutzer erfolgreich erstellt" });
        });
    });

    // Login
    app.post("/login", (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
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
                    const token = jwt.sign({ username: username }, jwtkey, );
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
