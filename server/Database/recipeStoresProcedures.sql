/*
@dev: This procedure creates a new recipe in the database
@param: in_name: VARCHAR(25) - Name of the recipe (optional)
		in_description: VARCHAR(25) - Description of the recipe (optional)
		in_servings: INT - Number of servings (optional)
		in_prep_time: INTERVAL - Preparation time (optional)
		in_cook_time: INTERVAL - Cooking time (optional)
		in_id_author: INT - ID of the author (optional)
		in_ingredients: JSONB[] - Ingredients list (optional)
		in_calories: INT - Total calories (optional)
		in_creation_date: TIME - Creation date (optional)
		in_rating: DECIMAL(4,2) - Rating of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE create_recipe(
    in_name VARCHAR(25) DEFAULT NULL,
    in_description VARCHAR(25) DEFAULT NULL,
    in_servings INT DEFAULT NULL,
    in_prep_time INTERVAL DEFAULT NULL,
    in_cook_time INTERVAL DEFAULT NULL,
    in_id_author INT DEFAULT NULL,
    in_ingredients JSONB[] DEFAULT NULL,
    in_calories INT DEFAULT NULL,
    in_creation_date TIME DEFAULT NULL,
    in_rating DECIMAL(4,2) DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserts a new recipe into the Recipe table
    INSERT INTO "Recipe" ("name", "description", "servings", "prep_time", "cook_time", "id_author", "ingredients", "calories", "creation_date", "rating")
    VALUES (in_name, in_description, in_servings, in_prep_time, in_cook_time, in_id_author, in_ingredients, in_calories, in_creation_date, in_rating);
END;
$$;

/*
@dev: This procedure retrieves a recipe by its ID
@param: in_recipe_id: INT - ID of the recipe to retrieve
@returns: Recipe based on the provided ID
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_recipe_by_id(
    in_recipe_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Retrieves a recipe by its ID from the Recipe table
    RETURN QUERY SELECT * FROM "Recipe" WHERE "id_recipe" = in_recipe_id;
END;
$$;

/*
@dev: This procedure updates a recipe given its ID
@param: in_recipe_id: INT - ID of the recipe to update
		in_name: VARCHAR(25) - Name of the recipe (optional)
		in_description: VARCHAR(25) - Description of the recipe (optional)
		in_servings: INT - Number of servings (optional)
		in_prep_time: INTERVAL - Preparation time (optional)
		in_cook_time: INTERVAL - Cooking time (optional)
		in_id_author: INT - ID of the author (optional)
		in_ingredients: JSONB[] - Ingredients list (optional)
		in_calories: INT - Total calories (optional)
		in_creation_date: TIME - Creation date (optional)
		in_rating: DECIMAL(4,2) - Rating of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_recipe(
    in_recipe_id INT,
    in_name VARCHAR(25) DEFAULT NULL,
    in_description VARCHAR(25) DEFAULT NULL,
    in_servings INT DEFAULT NULL,
    in_prep_time INTERVAL DEFAULT NULL,
    in_cook_time INTERVAL DEFAULT NULL,
    in_id_author INT DEFAULT NULL,
    in_ingredients JSONB[] DEFAULT NULL,
    in_calories INT DEFAULT NULL,
    in_creation_date TIME DEFAULT NULL,
    in_rating DECIMAL(4,2) DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Updates a recipe in the Recipe table based on its ID
    UPDATE "Recipe"
    SET "name" = COALESCE(in_name, "name"),
        "description" = COALESCE(in_description, "description"),
        "servings" = COALESCE(in_servings, "servings"),
        "prep_time" = COALESCE(in_prep_time, "prep_time"),
        "cook_time" = COALESCE(in_cook_time, "cook_time"),
        "id_author" = COALESCE(in_id_author, "id_author"),
        "ingredients" = COALESCE(in_ingredients, "ingredients"),
        "calories" = COALESCE(in_calories, "calories"),
        "creation_date" = COALESCE(in_creation_date, "creation_date"),
        "rating" = COALESCE(in_rating, "rating")
    WHERE "id_recipe" = in_recipe_id;
END;
$$;

/*
@dev: This procedure deletes a recipe given its ID
@param: in_recipe_id: INT - ID of the recipe to delete
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_recipe(
    in_recipe_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Deletes a recipe from the Recipe table based on its ID
    DELETE FROM "Recipe"
    WHERE "id_recipe" = in_recipe_id;
END;
$$;
