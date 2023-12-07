CREATE TABLE "Image" (
  "id_image" SERIAL,
  "file_location" VARCHAR(255),
  "name" VARCHAR(25),
  PRIMARY KEY ("id_image")
);

CREATE TABLE "User" (
  "id_user" SERIAL,
  "username" VARCHAR(25),
  "password" VARCHAR(25),
  "description" VARCHAR(1000),
  "picture" INT,
  PRIMARY KEY ("id_user"),
  CONSTRAINT "FK_User.picture"
    FOREIGN KEY ("picture")
      REFERENCES "Image"("id_image")
);

CREATE TABLE "Recipe" (
  "id_recipe" SERIAL,
  "name" VARCHAR(25),
  "description" VARCHAR(25),
  "servings" INT,
  "prep_time" INTERVAL,
  "cook_time" INTERVAL,
  "id_author" INT,
  "ingredients" JSONB[],
  "calories" INT,
  "creation_date" TIME,
  "rating" DECIMAL(4,2),
  PRIMARY KEY ("id_recipe"),
  CONSTRAINT "FK_Recipe.id_author"
    FOREIGN KEY ("id_author")
      REFERENCES "User"("id_user")
);

CREATE TABLE "FavoriteRecipes" (
  "id_user" INT,
  "id_recipe" INT,
  CONSTRAINT "FK_FavoriteRecipes.id_recipe"
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe"),
  CONSTRAINT "FK_FavoriteRecipes.id_user"
    FOREIGN KEY ("id_user")
      REFERENCES "User"("id_user")
);

CREATE TABLE "Comment" (
  "id_comment" SERIAL,
  "comment" VARCHAR(1000),
  "id_user" INT,
  "id_recipe" INT,
  "creation_date" TIME,
  PRIMARY KEY ("id_comment"),
  CONSTRAINT "FK_Comment.id_user"
    FOREIGN KEY ("id_user")
      REFERENCES "User"("id_user"),
  CONSTRAINT "FK_Comment.id_recipe"
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);

CREATE TABLE "ImageXRecipe" (
  "id_image" INT,
  "id_recipe" INT,
  "is_favorite" BOOL,
  CONSTRAINT "FK_ImageXRecipe.id_image"
    FOREIGN KEY ("id_image")
      REFERENCES "Image"("id_image"),
  CONSTRAINT "FK_ImageXRecipe.id_recipe"
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);

CREATE TABLE "Category" (
  "id_category" SERIAL,
  "name" VARCHAR(25),
  "description" VARCHAR(1000),
  PRIMARY KEY ("id_category")
);

CREATE TABLE "CategoryXRecipe" (
  "id_category" INT,
  "id_recipe" INT,
  CONSTRAINT "FK_CategoryXRecipe.id_category"
    FOREIGN KEY ("id_category")
      REFERENCES "Category"("id_category"),
  CONSTRAINT "FK_CategoryXRecipe.id_recipe"
    FOREIGN KEY ("id_recipe")
      REFERENCES "Recipe"("id_recipe")
);
