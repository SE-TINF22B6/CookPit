function dbcreate(){

    // Table to store images
    db.run(`CREATE TABLE Image (
        id_image INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for an image
        file_location TEXT, -- Path or URL of the image file
        name TEXT -- Name of the image
    )`);

    // Table to store user information
    db.run(`CREATE TABLE User (
        id_user INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a user
        username TEXT, -- User's username
        password TEXT, -- User's password
        description TEXT, -- Description or bio of the user
        picture INTEGER, -- ID of the user's profile picture
        FOREIGN KEY (picture) REFERENCES Image(id_image)
    )`);

    // Table to store recipe information
    db.run(`CREATE TABLE Recipe (
        id_recipe INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a recipe
        name TEXT, -- Name of the recipe
        description TEXT, -- Brief description of the recipe
        servings INTEGER, -- Number of servings the recipe yields
        prep_time TEXT, -- Preparation time for the recipe
        cook_time TEXT, -- Cooking time for the recipe
        id_author INTEGER, -- ID of the author (user) who created the recipe
        ingredients TEXT, -- Ingredients of the recipe in JSON format
        calories INTEGER, -- Caloric content of the recipe
        creation_date TEXT, -- Date and time when the recipe was created
        rating REAL, -- Rating or score of the recipe
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

    // Table to store comments on recipes
    db.run(`CREATE TABLE Comment (
        id_comment INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a comment
        comment TEXT, -- Text of the comment
        id_user INTEGER, -- User ID
        id_recipe INTEGER, -- Recipe ID
        creation_date TEXT, -- Date and time when the comment was created
        FOREIGN KEY (id_user) REFERENCES User(id_user),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe)
    )`);

    // Table to associate images with recipes
    db.run(`CREATE TABLE ImageXRecipe (
        id_image INTEGER, -- Image ID
        id_recipe INTEGER, -- Recipe ID
        is_favorite INTEGER, -- Indicates if the image is a favorite for the recipe
        FOREIGN KEY (id_image) REFERENCES Image(id_image),
        FOREIGN KEY (id_recipe) REFERENCES Recipe(id_recipe),
        PRIMARY KEY (id_image, id_recipe)
    )`);

    // Table to store recipe categories
    db.run(`CREATE TABLE Category (
        id_category INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for a category
        name TEXT, -- Name of the category
        description TEXT -- Description of the category
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