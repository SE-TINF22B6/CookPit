-- Create
CREATE OR REPLACE PROCEDURE create_recipe(
    in_name VARCHAR(25),
    in_description VARCHAR(25),
    in_servings INT,
    in_prep_time INTERVAL,
    in_cook_time INTERVAL,
    in_id_author INT,
    in_ingredients JSONB[],
    in_calories INT,
    in_creation_date TIME,
    in_rating DECIMAL(4,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Recipe" ("name", "description", "servings", "prep_time", "cook_time", "id_author", "ingredients", "calories", "creation_date", "rating")
    VALUES (in_name, in_description, in_servings, in_prep_time, in_cook_time, in_id_author, in_ingredients, in_calories, in_creation_date, in_rating);
END;
$$;


-- Read
CREATE OR REPLACE PROCEDURE get_recipe_by_id(
    in_recipe_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Recipe" WHERE "id_recipe" = in_recipe_id;
END;
$$;


-- Update
CREATE OR REPLACE PROCEDURE update_recipe(
    in_recipe_id INT,
    in_name VARCHAR(25),
    in_description VARCHAR(25),
    in_servings INT,
    in_prep_time INTERVAL,
    in_cook_time INTERVAL,
    in_id_author INT,
    in_ingredients JSONB[],
    in_calories INT,
    in_creation_date TIME,
    in_rating DECIMAL(4,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Recipe"
    SET "name" = in_name,
        "description" = in_description,
        "servings" = in_servings,
        "prep_time" = in_prep_time,
        "cook_time" = in_cook_time,
        "id_author" = in_id_author,
        "ingredients" = in_ingredients,
        "calories" = in_calories,
        "creation_date" = in_creation_date,
        "rating" = in_rating
    WHERE "id_recipe" = in_recipe_id;
END;
$$;


-- Delete
CREATE OR REPLACE PROCEDURE update_recipe(
    in_recipe_id INT,
    in_name VARCHAR(25),
    in_description VARCHAR(25),
    in_servings INT,
    in_prep_time INTERVAL,
    in_cook_time INTERVAL,
    in_id_author INT,
    in_ingredients JSONB[],
    in_calories INT,
    in_creation_date TIME,
    in_rating DECIMAL(4,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Recipe"
    SET "name" = in_name,
        "description" = in_description,
        "servings" = in_servings,
        "prep_time" = in_prep_time,
        "cook_time" = in_cook_time,
        "id_author" = in_id_author,
        "ingredients" = in_ingredients,
        "calories" = in_calories,
        "creation_date" = in_creation_date,
        "rating" = in_rating
    WHERE "id_recipe" = in_recipe_id;
END;
$$;
