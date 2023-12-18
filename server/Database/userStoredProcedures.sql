/*
@dev: This procedure creates (inserts) a new user in the database
@param: in_username: VARCHAR(25) - Username (optional)
		in_password: VARCHAR(25) - User password (optional)
		in_description: VARCHAR(1000) - User description (optional)
		in_picture: INT - User profile picture (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE create_user(
    in_username VARCHAR(25) DEFAULT NULL,
    in_password VARCHAR(25) DEFAULT NULL,
    in_description VARCHAR(1000) DEFAULT NULL,
    in_picture INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Inserting a new user into the User table
    INSERT INTO "User" ("username", "password", "description", "picture")
    VALUES (in_username, in_password, in_description, in_picture);
END;
$$;

/*
@dev: This procedure retrieves a user based on their ID
@param: in_user_id: INT - User ID (optional)
@returns: Query result containing user information based on the provided ID
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_user_by_id(
    in_user_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
DECLARE
    user_record RECORD;
BEGIN
    -- Selecting the user based on the ID and returning the result
    SELECT * INTO user_record FROM "User" WHERE "id_user" = in_user_id;
    RETURN QUERY SELECT * FROM "User" WHERE "id_user" = in_user_id;
END;
$$;

/*
@dev: This procedure updates user information
@param: in_user_id: INT - User ID (optional)
		in_username: VARCHAR(25) - Username (optional)
		in_password: VARCHAR(25) - User password (optional)
		in_description: VARCHAR(1000) - User description (optional)
		in_picture: INT - User profile picture (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_user(
    in_user_id INT DEFAULT NULL,
    in_username VARCHAR(25) DEFAULT NULL,
    in_password VARCHAR(25) DEFAULT NULL,
    in_description VARCHAR(1000) DEFAULT NULL,
    in_picture INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Updating user information in the User table
    UPDATE "User"
    SET "username" = in_username,
        "password" = in_password,
        "description" = in_description,
        "picture" = in_picture
    WHERE "id_user" = in_user_id;
END;
$$;

/*
@dev: This procedure deletes a user based on their ID
@param: in_user_id: INT - User ID (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_user(
    in_user_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Deleting a user from the User table based on their ID
    DELETE FROM "User" WHERE "id_user" = in_user_id;
END;
$$;
