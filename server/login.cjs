    const jwt = require('jsonwebtoken');
    const sqlite3 = require('sqlite3').verbose();
    const database = require('./database.cjs');


    function loginserver (app) {
        const db = database();
        let username;
        let password;
        // Registrieren
        app.post("/register", (req, res) => {
            let username = req.body.username;
            let password = req.body.password;

            insertData(username, password)
        });

        function insertData(username, password, callback) {
            let sql = 'INSERT INTO account (username, password) VALUES (?, ?)';
            let params = [username, password];
            db.db.run(sql, params, function(err) {
                if (err) {
                    console.error("Fehler beim Einfügen von Daten: " + err.message);
                } else {
                    console.log(`Datensatz hinzugefügt mit der ID ${this.lastID}.`);
                }
            });

        // Login
        app.post("/login", (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            login(username, password, () => {
            })
        })


        function login (username, password) {}
            db.db.get("SELECT * FROM account WHERE username = ? AND password = ?",
                [username, password],
                (err, result) => {
                    if (err) {
                        res.send({ loginmessage: err });
                        return;
                    } else if (result) {
                        const token = jwt.sign({ username: username }, 'geheimerSchluessel', { expiresIn: '24h' });
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
module.exports = loginserver;