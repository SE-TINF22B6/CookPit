/*
@dev: This procedure creates a new association between an image and a recipe in the database
@param: in_image_id: INT - ID of the image (optional)
		in_recipe_id: INT - ID of the recipe (optional)
		in_is_favorite: BOOL - Indicates if the image is marked as a favorite (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE insert_image_recipe(
    in_image_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL,
    in_is_favorite BOOL DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserts a new association between an image and a recipe
    INSERT INTO "ImageXRecipe" ("id_image", "id_recipe", "is_favorite")
    VALUES (in_image_id, in_recipe_id, in_is_favorite);
END;
$$;

/*
@dev: This procedure retrieves image-recipe associations based on provided IDs or retrieves all associations if no specific IDs provided
@param: in_image_id: INT - ID of the image (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: Image-recipe associations based on provided IDs or all associations if none provided
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_image_recipe(
    in_image_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF in_image_id IS NOT NULL AND in_recipe_id IS NOT NULL THEN
        -- Retrieve specific image-recipe association
        SELECT *
        FROM "ImageXRecipe"
        WHERE "id_image" = in_image_id AND "id_recipe" = in_recipe_id;
    ELSIF in_image_id IS NOT NULL THEN
        -- Retrieve all recipes associated with a specific image
        SELECT *
        FROM "ImageXRecipe"
        WHERE "id_image" = in_image_id;
    ELSIF in_recipe_id IS NOT NULL THEN
        -- Retrieve all images associated with a specific recipe
        SELECT *
        FROM "ImageXRecipe"
        WHERE "id_recipe" = in_recipe_id;
    ELSE
        -- Retrieve all records from the table if no specific IDs provided
        SELECT *
        FROM "ImageXRecipe";
    END IF;
END;
$$;

/*
@dev: This procedure updates an association between an image and a recipe given their IDs
@param: in_image_id: INT - ID of the current image (optional)
		in_recipe_id: INT - ID of the current recipe (optional)
		in_new_image_id: INT - New image ID (optional)
		in_new_recipe_id: INT - New recipe ID (optional)
		in_new_is_favorite: BOOL - New favorite status (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_image_recipe(
    in_image_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL,
    in_new_image_id INT DEFAULT NULL,
    in_new_recipe_id INT DEFAULT NULL,
    in_new_is_favorite BOOL DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Updates the association between an image and a recipe
    UPDATE "ImageXRecipe"
    SET "id_image" = COALESCE(in_new_image_id, "id_image"),
        "id_recipe" = COALESCE(in_new_recipe_id, "id_recipe"),
        "is_favorite" = COALESCE(in_new_is_favorite, "is_favorite")
    WHERE "id_image" = in_image_id AND "id_recipe" = in_recipe_id;
END;
$$;

/*
@dev: This procedure deletes an association between an image and a recipe given their IDs
@param: in_image_id: INT - ID of the image (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_image_recipe(
    in_image_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Deletes the association between an image and a recipe
    DELETE FROM "ImageXRecipe"
    WHERE "id_image" = in_image_id AND "id_recipe" = in_recipe_id;
END;
$$;
