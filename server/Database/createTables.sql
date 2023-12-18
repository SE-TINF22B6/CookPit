-- Table to store images
CREATE TABLE "Image" (
  "id_image" SERIAL, -- Unique identifier for an image
  "file_location" VARCHAR(255), -- Path or URL of the image file
  "name" VARCHAR(25), -- Name of the image
  PRIMARY KEY ("id_image") -- Primary key constraint
);

-- Table to store user information
CREATE TABLE "User" (
  "id_user" SERIAL, -- Unique identifier for a user
  "username" VARCHAR(25), -- User's username
  "password" VARCHAR(25), -- User's password
  "description" VARCHAR(1000), -- Description or bio of the user
  "picture" INT, -- ID of the user's profile picture
  PRIMARY KEY ("id_user"), -- Primary key constraint
  CONSTRAINT "FK_User.picture" -- Foreign key constraint referencing Image table
    FOREIGN KEY ("picture")
      REFERENCES "Image"("id_image")
);

-- Table to store recipe information
CREATE TABLE "Recipe" (
  "id_recipe" SERIAL, -- Unique identifier for a recipe
  "name" VARCHAR(25), -- Name of the recipe
  "description" VARCHAR(25), -- Brief description of the recipe
  "servings" INT, -- Number of servings the recipe yields
  "prep_time" INTERVAL, -- Preparation time for the recipe
  "cook_time" INTERVAL, -- Cooking time for the recipe
  "id_author" INT, -- ID of the author (user) who created the recipe
  "ingredients" JSONB[], -- Ingredients of the recipe in JSON format
  "calories" INT, -- Caloric content of the recipe
  "creation_date" TIME, -- Date and time when the recipe was created
  "rating" DECIMAL(4,2), -- Rating or score of the recipe
  PRIMARY KEY ("id_recipe"), -- Primary key constraint
  CONSTRAINT "FK_Recipe.id_author" -- Foreign key constraint referencing User table
    FOREIGN KEY ("id_author")
      REFERENCES "User"("id_user")
);

-- Table to store favorite recipes for users
CREATE TABLE "FavoriteRecipes" (
  "id_user" INT, -- User ID
  "id_recipe" INT, -- Recipe ID
  CONSTRAINT "FK_FavoriteRecipes.id_recipe" -- Foreign key constraint referencing Recipe table
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe"),
  CONSTRAINT "FK_FavoriteRecipes.id_user" -- Foreign key constraint referencing User table
    FOREIGN KEY ("id_user")
      REFERENCES "User"("id_user")
);

-- Table to store comments on recipes
CREATE TABLE "Comment" (
  "id_comment" SERIAL, -- Unique identifier for a comment
  "comment" VARCHAR(1000), -- Text of the comment
  "id_user" INT, -- User ID
  "id_recipe" INT, -- Recipe ID
  "creation_date" TIME, -- Date and time when the comment was created
  PRIMARY KEY ("id_comment"), -- Primary key constraint
  CONSTRAINT "FK_Comment.id_user" -- Foreign key constraint referencing User table
    FOREIGN KEY ("id_user")
      REFERENCES "User"("id_user"),
  CONSTRAINT "FK_Comment.id_recipe" -- Foreign key constraint referencing Recipe table
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);

-- Table to associate images with recipes
CREATE TABLE "ImageXRecipe" (
  "id_image" INT, -- Image ID
  "id_recipe" INT, -- Recipe ID
  "is_favorite" BOOL, -- Indicates if the image is a favorite for the recipe
  CONSTRAINT "FK_ImageXRecipe.id_image" -- Foreign key constraint referencing Image table
    FOREIGN KEY ("id_image")
      REFERENCES "Image"("id_image"),
  CONSTRAINT "FK_ImageXRecipe.id_recipe" -- Foreign key constraint referencing Recipe table
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);

-- Table to store recipe categories
CREATE TABLE "Category" (
  "id_category" SERIAL, -- Unique identifier for a category
  "name" VARCHAR(25), -- Name of the category
  "description" VARCHAR(1000), -- Description of the category
  PRIMARY KEY ("id_category") -- Primary key constraint
);

-- Table to associate categories with recipes
CREATE TABLE "CategoryXRecipe" (
  "id_category" INT, -- Category ID
  "id_recipe" INT, -- Recipe ID
  CONSTRAINT "FK_CategoryXRecipe.id_category" -- Foreign key constraint referencing Category table
    FOREIGN KEY ("id_category")
      REFERENCES "Category"("id_category"),
  CONSTRAINT "FK_CategoryXRecipe.id_recipe" -- Foreign key constraint referencing Recipe table
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);
