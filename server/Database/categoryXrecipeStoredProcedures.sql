/*
@dev: This procedure creates a new association between a category and a recipe
@param: in_category_id: INT - ID of the category (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE insert_category_recipe(
    in_category_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Insert a new association between category and recipe
    INSERT INTO "CategoryXRecipe" ("id_category", "id_recipe")
    VALUES (in_category_id, in_recipe_id);
END;
$$;

/*
@dev: This procedure retrieves associations between categories and recipes based on provided IDs
@param: in_category_id: INT - ID of the category (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: Associations between categories and recipes based on the provided IDs or all associations if none provided
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_category_recipe(
    in_category_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF in_category_id IS NOT NULL AND in_recipe_id IS NOT NULL THEN
        -- Retrieve specific category-recipe association
        SELECT *
        FROM "CategoryXRecipe"
        WHERE "id_category" = in_category_id AND "id_recipe" = in_recipe_id;
    ELSIF in_category_id IS NOT NULL THEN
        -- Retrieve all recipes associated with a specific category
        SELECT *
        FROM "CategoryXRecipe"
        WHERE "id_category" = in_category_id;
    ELSIF in_recipe_id IS NOT NULL THEN
        -- Retrieve all categories associated with a specific recipe
        SELECT *
        FROM "CategoryXRecipe"
        WHERE "id_recipe" = in_recipe_id;
    ELSE
        -- Retrieve all records from the table if no specific IDs provided
        SELECT *
        FROM "CategoryXRecipe";
    END IF;
END;
$$;

/*
@dev: This procedure updates an association between a category and a recipe
@param: in_category_id: INT - ID of the current category (optional)
		in_recipe_id: INT - ID of the current recipe (optional)
		in_new_category_id: INT - New category ID (optional)
		in_new_recipe_id: INT - New recipe ID (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_category_recipe(
    in_category_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL,
    in_new_category_id INT DEFAULT NULL,
    in_new_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Update the association between category and recipe
    UPDATE "CategoryXRecipe"
    SET "id_category" = COALESCE(in_new_category_id, "id_category"),
        "id_recipe" = COALESCE(in_new_recipe_id, "id_recipe")
    WHERE "id_category" = in_category_id AND "id_recipe" = in_recipe_id;
END;
$$;

/*
@dev: This procedure deletes an association between a category and a recipe
@param: in_category_id: INT - ID of the category (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_category_recipe(
    in_category_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Delete the association between category and recipe
    DELETE FROM "CategoryXRecipe"
    WHERE "id_category" = in_category_id AND "id_recipe" = in_recipe_id;
END;
$$;
