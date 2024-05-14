// database.cjs
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtkey = crypto.randomBytes(32).toString('hex');



function Database(app) {

    //init database
    const db = new sqlite3.Database('./account.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
        }
      });

    //function for hasing passwords
    function hashPassword(password) {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        return hash.digest('hex'); // Rückgabe des gehashten Passworts als Hexadezimalzeichenfolge
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
    let user = ""
    let userstate = false;
    let loginmessage;
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
                        res.send({ loginmessage: "Erfolgreich eingeloggt", token });
                        console.log('User "' + username + '" eingeloggt');
                        user=username;
                        userstate=true;
                    } else {
                        res.send({ loginmessage: "Der Nutzername stimmt nicht mit dem Passwort überein" });
                        console.log('User "' + username + '" existiert nicht');
                    }
                }
            );
        };
    app.post("/getlogin", (req, res) => {
    if(userstate===true){
        loginmessage = user;
        res.send({loginmessage})
    }})   
    app.post("/logout", (req, res) => {
        if(userstate===true){
            user="";
            loginmessage="";
            res.send({loginmessage})
            console.log("User ausgeloggt")
        }
        })

        function verifyToken(req, res, next) {
            const token = req.headers.authorization;
        
            if (!token) {
                return res.status(401).json({ message: 'Token is missing' });
            }
        
            // Verify token
            jwt.verify(token, jwtKey, (err, decoded) => {
                if (err) {
                    return res.status(403).json({ message: 'Invalid token' });
                }
        
                // Attach user information to request object
                req.user = decoded;
                next();
            });
        }



}

module.exports = Database;
