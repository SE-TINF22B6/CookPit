/*
@dev: This procedure uploads an image and associates it with a recipe
@param: in_id_recipe: INT - ID of the recipe (optional)
		in_file_location: VARCHAR(255) - Location of the image file (optional)
		in_name: VARCHAR(25) - Name of the image (optional)
		in_is_favorite: BOOL - Indicates if the image is a favorite (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE upload_image_to_recipe(
    in_id_recipe INT DEFAULT NULL,
    in_file_location VARCHAR(255) DEFAULT NULL,
    in_name VARCHAR(25) DEFAULT NULL,
    in_is_favorite BOOL DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
DECLARE
    in_id_image INT; -- To store the returned ID of the inserted image
BEGIN
    -- Inserting the image into the Image table and capturing its ID
    INSERT INTO "Image" ("file_location", "name")
    VALUES (in_file_location, in_name)
    RETURNING "id_image" INTO in_id_image;

    -- Inserting the relationship into the ImageXRecipe table
    INSERT INTO "ImageXRecipe" ("id_image", "id_recipe", "is_favorite")
    VALUES (in_id_image, in_id_recipe, in_is_favorite);
END;
$$;

/*
@dev: This procedure adds a comment to a recipe
@param: in_comment_text: VARCHAR(1000) - Text of the comment (optional)
		in_id_user: INT - ID of the user adding the comment (optional)
		in_id_recipe: INT - ID of the recipe for the comment (optional)
		in_creation_date: TIME - Creation date of the comment (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE add_comment_to_recipe(
    in_comment_text VARCHAR(1000) DEFAULT NULL,
    in_id_user INT DEFAULT NULL,
    in_id_recipe INT DEFAULT NULL,
    in_creation_date TIME DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserting a comment into the Comment table
    INSERT INTO "Comment" ("comment", "id_user", "id_recipe", "creation_date")
    VALUES (in_comment_text, in_id_user, in_id_recipe, in_creation_date);
END;
$$;

/*
@dev: This function sets a recipe for a user
@param: p_username: VARCHAR(25) - Username (optional)
		p_recipe_id: INT - ID of the recipe to set for the user (optional)
@returns: VOID
@dev: Andres Masis
*/
CREATE OR REPLACE FUNCTION set_recipe_for_user(
    IN p_username VARCHAR(25) DEFAULT NULL,
    IN p_recipe_id INT DEFAULT NULL
) 
RETURNS VOID AS $$
BEGIN
    -- Get the user ID based on the username
    DECLARE user_id INT;
    SELECT id_user INTO user_id FROM "User" WHERE username = p_username;

    -- Check if the user exists
    IF user_id IS NULL THEN
        RAISE EXCEPTION 'User with username % not found', p_username;
    END IF;

    -- Check if the recipe exists
    IF NOT EXISTS (SELECT 1 FROM "Recipe" WHERE id_recipe = p_recipe_id) THEN
        RAISE EXCEPTION 'Recipe with ID % not found', p_recipe_id;
    END IF;

    -- Set the recipe for the user by inserting into CategoryXRecipe
    INSERT INTO "CategoryXRecipe" ("id_category", "id_recipe")
    VALUES (1, p_recipe_id); -- Assuming category ID 1 for this example

    -- Perform any other operations needed
    
    -- Commit the transaction
    COMMIT;
END;
$$ LANGUAGE plpgsql;

/*
@dev: This function uploads an image for a user and sets it as their profile picture
@param: p_username: VARCHAR(25) - Username (optional)
		p_file_location: VARCHAR(255) - Location of the image file (optional)
		p_image_name: VARCHAR(25) - Name of the image (optional)
@returns: VOID
@dev: Andres Masis
*/
CREATE OR REPLACE FUNCTION upload_user_image(
    IN p_username VARCHAR(25) DEFAULT NULL,
    IN p_file_location VARCHAR(255) DEFAULT NULL,
    IN p_image_name VARCHAR(25) DEFAULT NULL
) 
RETURNS VOID AS $$
DECLARE
    user_id INT;
    image_id INT;
BEGIN
    -- Check if the user exists
    SELECT id_user INTO user_id FROM "User" WHERE username = p_username;

    IF user_id IS NULL THEN
        RAISE EXCEPTION 'User with username % not found', p_username;
    END IF;

    -- Insert the image details into the Image table and get the image ID
    INSERT INTO "Image" ("file_location", "name")
    VALUES (p_file_location, p_image_name)
    RETURNING id_image INTO image_id;

    -- Update the user's picture ID with the newly uploaded image ID
    UPDATE "User"
    SET "picture" = image_id
    WHERE "id_user" = user_id;

    -- Commit the transaction
    COMMIT;
END;
$$ LANGUAGE plpgsql;
