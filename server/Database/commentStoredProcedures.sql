/*
@dev: This procedure creates a new comment in the database
@param: in_comment_text: VARCHAR(1000) - Text of the comment (optional)
		in_user_id: INT - ID of the user (optional)
		in_recipe_id: INT - ID of the recipe (optional)
		in_creation_date: TIME - Creation date of the comment (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE insert_comment(
    in_comment_text VARCHAR(1000) DEFAULT NULL,
    in_user_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL,
    in_creation_date TIME DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Insert a new comment into the Comment table
    INSERT INTO "Comment" ("comment", "id_user", "id_recipe", "creation_date")
    VALUES (in_comment_text, in_user_id, in_recipe_id, in_creation_date);
END;
$$;

/*
@dev: This procedure retrieves comments based on provided IDs or retrieves all comments if no specific IDs provided
@param: in_comment_id: INT - ID of the comment (optional)
		in_user_id: INT - ID of the user (optional)
		in_recipe_id: INT - ID of the recipe (optional)
@returns: Comments based on provided IDs or all comments if none provided
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_comment(
    in_comment_id INT DEFAULT NULL,
    in_user_id INT DEFAULT NULL,
    in_recipe_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF in_comment_id IS NOT NULL THEN
        -- Retrieve specific comment by ID
        SELECT *
        FROM "Comment"
        WHERE "id_comment" = in_comment_id;
    ELSIF in_user_id IS NOT NULL THEN
        -- Retrieve comments by user ID
        SELECT *
        FROM "Comment"
        WHERE "id_user" = in_user_id;
    ELSIF in_recipe_id IS NOT NULL THEN
        -- Retrieve comments by recipe ID
        SELECT *
        FROM "Comment"
        WHERE "id_recipe" = in_recipe_id;
    ELSE
        -- Retrieve all comments if no specific IDs provided
        SELECT *
        FROM "Comment";
    END IF;
END;
$$;

/*
@dev: This procedure updates a comment given its ID
@param: in_comment_id: INT - ID of the comment to update
		in_new_comment_text: VARCHAR(1000) - New text of the comment (optional)
		in_new_user_id: INT - New user ID (optional)
		in_new_recipe_id: INT - New recipe ID (optional)
		in_new_creation_date: TIME - New creation date of the comment (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_comment(
    in_comment_id INT,
    in_new_comment_text VARCHAR(1000) DEFAULT NULL,
    in_new_user_id INT DEFAULT NULL,
    in_new_recipe_id INT DEFAULT NULL,
    in_new_creation_date TIME DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Update the comment in the Comment table
    UPDATE "Comment"
    SET "comment" = COALESCE(in_new_comment_text, "comment"),
        "id_user" = COALESCE(in_new_user_id, "id_user"),
        "id_recipe" = COALESCE(in_new_recipe_id, "id_recipe"),
        "creation_date" = COALESCE(in_new_creation_date, "creation_date")
    WHERE "id_comment" = in_comment_id;
END;
$$;

/*
@dev: This procedure deletes a comment given its ID
@param: in_comment_id: INT - ID of the comment to delete
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_comment(
    in_comment_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Delete the comment from the Comment table
    DELETE FROM "Comment"
    WHERE "id_comment" = in_comment_id;
END;
$$;
