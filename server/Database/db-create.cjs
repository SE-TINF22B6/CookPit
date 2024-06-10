const sqlite3 = require('sqlite3').verbose();

function dbcreate() {
    const db = new sqlite3.Database('./Cookpit.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich erstellt.");
        }
    });

    db.serialize(() => {
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
            rating INTEGER, -- Rating or score of the recipe
            category TEXT, -- Category of the recipe
            picture TEXT, -- Picture in base64 of recipe
            FOREIGN KEY (id_author) REFERENCES User(id_user)
        )`);

        // const recipes = [
    //         {
    //             name: "Schokoladenkuchen",
    //             description: JSON.stringify([
    //                 "Vorbereitung:",
    //                 "1. Den Backofen auf 180°C vorheizen.",
    //                 "2. Eine Kuchenform einfetten und mit Mehl bestäuben.",
    //                 "",
    //                 "Teig herstellen:",
    //                 "1. Die Butter in einer Schüssel cremig rühren.",
    //                 "2. Zucker hinzufügen und gut vermischen.",
    //                 "3. Die Eier einzeln unterrühren, bis eine homogene Masse entsteht.",
    //                 "",
    //                 "Trockene Zutaten hinzufügen:",
    //                 "1. Mehl, Kakao und Backpulver in einer separaten Schüssel vermischen.",
    //                 "2. Die Mehlmischung abwechselnd mit der Milch unter die Butter-Zucker-Ei-Masse rühren.",
    //                 "",
    //                 "Backen:",
    //                 "1. Den Teig in die vorbereitete Kuchenform füllen.",
    //                 "2. Im vorgeheizten Backofen etwa 35-40 Minuten backen.",
    //                 "3. Mit einem Zahnstocher testen, ob der Kuchen durchgebacken ist (der Zahnstocher sollte sauber herauskommen).",
    //                 "",
    //                 "Abkühlen und Servieren:",
    //                 "1. Den Kuchen aus dem Ofen nehmen und etwa 10 Minuten in der Form abkühlen lassen.",
    //                 "2. Anschließend auf ein Kuchengitter stürzen und vollständig abkühlen lassen.",
    //                 "3. Nach Belieben mit Puderzucker bestäuben oder mit Schokoladenglasur überziehen."
    //             ]),
    //             time: "1 Stunde",
    //             id_author: 1, // Assuming author with id 1 exists
    //             ingredients: "Mehl, Zucker, Butter, Eier, Kakao, Backpulver, Milch",
    //             creation_date: "2024-06-08",
    //             rating: 5,
    //             category: "Kuchen",
    //             picture: "" // Base64-kodiertes Bild hier einfügen
    //         },
    //         {
    //             name: "Apfelkuchen",
    //             description: JSON.stringify([
    //                 "Vorbereitung:",
    //                 "1. Den Backofen auf 175°C vorheizen.",
    //                 "2. Eine Kuchenform einfetten und mit Mehl bestäuben.",
    //                 "",
    //                 "Äpfel vorbereiten:",
    //                 "1. Die Äpfel schälen, entkernen und in dünne Scheiben schneiden.",
    //                 "2. Mit Zimt bestreuen und beiseite stellen.",
    //                 "",
    //                 "Teig herstellen:",
    //                 "1. Die Butter in einer Schüssel cremig rühren.",
    //                 "2. Zucker hinzufügen und gut vermischen.",
    //                 "3. Die Eier einzeln unterrühren, bis eine homogene Masse entsteht.",
    //                 "",
    //                 "Trockene Zutaten hinzufügen:",
    //                 "1. Mehl und Backpulver in einer separaten Schüssel vermischen.",
    //                 "2. Die Mehlmischung nach und nach unter die Butter-Zucker-Ei-Masse rühren.",
    //                 "",
    //                 "Äpfel hinzufügen:",
    //                 "1. Die Hälfte des Teigs in die vorbereitete Kuchenform füllen.",
    //                 "2. Eine Schicht Apfelscheiben darauf verteilen.",
    //                 "3. Den restlichen Teig darüber geben und glatt streichen.",
    //                 "4. Die restlichen Apfelscheiben dekorativ auf den Teig legen.",
    //                 "",
    //                 "Backen:",
    //                 "1. Den Kuchen im vorgeheizten Backofen etwa 50-60 Minuten backen.",
    //                 "2. Mit einem Zahnstocher testen, ob der Kuchen durchgebacken ist (der Zahnstocher sollte sauber herauskommen).",
    //                 "",
    //                 "Abkühlen und Servieren:",
    //                 "1. Den Kuchen aus dem Ofen nehmen und etwa 10 Minuten in der Form abkühlen lassen.",
    //                 "2. Anschließend auf ein Kuchengitter stürzen und vollständig abkühlen lassen.",
    //                 "3. Nach Belieben mit Puderzucker bestäuben."
    //             ]),
    //             time: "1 Stunde 30 Minuten",
    //             id_author: 1, // Assuming author with id 1 exists
    //             ingredients: "Mehl, Zucker, Butter, Eier, Äpfel, Zimt, Backpulver",
    //             creation_date: "2024-06-08",
    //             rating: 4,
    //             category: "Kuchen",
    //             picture: "" // Base64-kodiertes Bild hier einfügen
    //         }
    //     ];

    //     recipes.forEach(recipe => {
    //         db.run(`INSERT INTO Recipe (name, description, time, id_author, ingredients, creation_date, rating, category, picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    //         [recipe.name, recipe.description, recipe.time, recipe.id_author, recipe.ingredients, recipe.creation_date, recipe.rating, recipe.category, recipe.picture],
    //         function(err) {
    //             if (err) {
    //                 return console.log(err.message);
    //             }
    //             console.log(`A row has been inserted with rowid ${this.lastID}`);
    //         });
    //     });#
 });

    db.close((err) => {
        if (err) {
            console.error("Fehler beim Schließen der Datenbank: " + err.message);
        } else {
            console.log("Datenbankverbindung geschlossen.");
        }
    });
}

module.exports = dbcreate;
