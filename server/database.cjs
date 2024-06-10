const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwtkey = crypto.randomBytes(32).toString('hex');
const multer = require('multer');
const fs = require('fs');

function Database(app) {
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    // Init database
    const db = new sqlite3.Database('./Cookpit.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
        }
    });

    // Function for hashing passwords
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

        insertUser(username, password, () => {
            res.send({ loginmessage: "Benutzer erfolgreich erstellt" });
        });
    });

    function insertUser(username, password, callback) {
        let sql = 'INSERT INTO User (username, password) VALUES (?, ?)';
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

    let user = "";
    let userstate = false;
    let loginmessage;
    let token;

    // Login
    app.post("/login", (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        password = hashPassword(password);
        login(username, password, res);
    });

    function login(username, password, res) {
        db.get("SELECT * FROM User WHERE username = ? AND password = ?",
            [username, password],
            (err, result) => {
                if (err) {
                    res.send({ loginmessage: err });
                    return;
                } else if (result) {
                    const token = jwt.sign({ username: username }, jwtkey, { expiresIn: "24h" });
                    res.send({ loginmessage: "Erfolgreich eingeloggt", token });
                    console.log('User "' + username + '" eingeloggt');
                    user = username;
                    userstate = true;
                } else {
                    res.send({ loginmessage: "Der Nutzername stimmt nicht mit dem Passwort überein" });
                    console.log('User "' + username + '" existiert nicht');
                }
            }
        );
    }

    app.post("/getlogin", (req, res) => {
        if (userstate === true) {
            loginmessage = user;
            res.send({ loginmessage });
        }
    });

    app.post("/logout", (req, res) => {
        if (userstate === true) {
            user = "";
            loginmessage = "";
            res.send({ loginmessage });
            console.log("User ausgeloggt");
        }
    });

    app.post("/getallrecipe", (req, res) => {
        db.all("SELECT * FROM recipe", (err, results) => {
            if (err) {
                console.log("Fehler:" + err);
                return;
            } else if (results) {
                res.send({ results });
            }
        });
    });

    app.post("/getuserid", (req, res) => {
        const username = req.body.username;
        db.get("SELECT id_user FROM User WHERE username = ?", [username], (err, result) => {
            if (err) {
                console.log("Fehler:" + err);
                return;
            } else if (result) {
                res.send({ result });
                console.log("ID von " + username + " ist " + result.id_user);
            }
        });
    });

    app.post('/verifyToken', (req, res) => {
        const { token } = req.body;
        jwt.verify(token, jwtkey, (err, decoded) => {
          if (err) {
            return res.json({ isValid: false });
          }
          res.json({ isValid: true });
        });
      });

    function addrecipe(recipename, recipedescription, recipetime, recipeid_author, recipeingredients, recipecreationdate, reciperating, recipecategory, recipepicture, res) {
        db.run("INSERT INTO Recipe (name, description, time, id_author, ingredients, creation_date, rating, category, picture) VALUES (?,?,?,?,?,?,?,?,?)",
            [recipename, recipedescription, recipetime, recipeid_author, recipeingredients, recipecreationdate, reciperating, recipecategory, recipepicture],
            (err, result) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(result);
                    res.send({ message: "Rezept erfolgreich eingefügt" });
                }
            });
    }

    app.post("/addrecipe", upload.single('recipepicture'), (req, res) => {
        const { recipename, recipedescription, recipetime, recipeid_author, recipeingredients, recipecreationdate, reciperating, recipecategory } = req.body;
        let recipepicture = null;
        if (req.file) {
            recipepicture = req.file.buffer.toString('base64');
        }
        addrecipe(recipename, recipedescription, recipetime, recipeid_author, recipeingredients, recipecreationdate, reciperating, recipecategory, recipepicture, res)
    });
}

module.exports = Database;
