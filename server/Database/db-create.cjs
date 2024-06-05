const sqlite3 = require('sqlite3').verbose();

function dbcreate() {
    const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            console.error("Fehler beim Öffnen der Datenbank: " + err.message);
        } else {
            console.log("Datenbank erfolgreich geöffnet.");
        }
    });

    // Table to store images
    db.run(`CREATE TABLE Image (
        id_image INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for an image
        base64 TEXT -- Path or URL of the image file
    )`);

    // Table to store user information
    db.run(`CREATE TABLE User (
        id_user INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a user
        username TEXT, -- User's username
        password TEXT -- User's password
        -- FOREIGN KEY (picture) REFERENCES Image(id_image) -- Incorrect foreign key removed
    )`);

    // Table to store recipe information
    db.run(`CREATE TABLE Recipe (
        id_recipe INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a recipe
        name TEXT, -- Name of the recipe
        description TEXT, -- Brief description of the recipe
        cook_time TEXT, -- Time to make the recipe
        id_author INTEGER, -- ID of the author (user) who created the recipe
        ingredients TEXT, -- Ingredients of the recipe in JSON format
        creation_date TEXT, -- Date and time when the recipe was created
        rating INTEGER, -- Rating or score of the recipe
        FOREIGN KEY (id_author) REFERENCES User(id_user)
    )`);

    // Table to store favorite recipes for users
    db.run(`CREATE TABLE FavoriteRecipes (
        id_user INTEGER, -- User ID
        id_recipe INTEGER, -- Recipe ID
        FOREIGN KEY (id_user) REFERENCES User(id_user),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe),
        PRIMARY KEY (id_user, id_recipe)
    )`);

    /* Table to store comments on recipes
    db.run(`CREATE TABLE Comment (
        id_comment INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a comment
        comment TEXT, -- Text of the comment
        id_user INTEGER, -- User ID
        id_recipe INTEGER, -- Recipe ID
        creation_date TEXT, -- Date and time when the comment was created
        FOREIGN KEY (id_user) REFERENCES User(id_user),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe)
    )`); */

    // Table to associate images with recipes
    db.run(`CREATE TABLE ImageXRecipe (
        id_image INTEGER, -- Image ID
        id_recipe INTEGER, -- Recipe ID
        FOREIGN KEY (id_image) REFERENCES Image(id_image),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe),
        PRIMARY KEY (id_image, id_recipe)
    )`);

    // Table to store recipe categories
    db.run(`CREATE TABLE Category (
        id_category INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a category
        name TEXT -- Name of the category
    )`);

    // Table to associate categories with recipes
    db.run(`CREATE TABLE CategoryXRecipe (
        id_category INTEGER, -- Category ID
        id_recipe INTEGER, -- Recipe ID
        FOREIGN KEY (id_category) REFERENCES Category(id_category),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe),
        PRIMARY KEY (id_category, id_recipe)
    )`);
};

module.exports = dbcreate;
