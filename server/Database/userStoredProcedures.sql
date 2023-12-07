-- Create
CREATE OR REPLACE PROCEDURE create_user(
    in_username VARCHAR(25),
    in_password VARCHAR(25),
    in_description VARCHAR(1000),
    in_picture INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "User" ("username", "password", "description", "picture")
    VALUES (in_username, in_password, in_description, in_picture);
END;
$$;

-- Read
CREATE OR REPLACE PROCEDURE get_user_by_id(
    in_user_id INT
)
LANGUAGE plpgsql
AS $$
DECLARE
    user_record RECORD;
BEGIN
    SELECT * INTO user_record FROM "User" WHERE "id_user" = in_user_id;
    RETURN QUERY SELECT * FROM "User" WHERE "id_user" = in_user_id;
END;
$$;


-- Update
CREATE OR REPLACE PROCEDURE update_user(
    in_user_id INT,
    in_username VARCHAR(25),
    in_password VARCHAR(25),
    in_description VARCHAR(1000),
    in_picture INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "User"
    SET "username" = in_username,
        "password" = in_password,
        "description" = in_description,
        "picture" = in_picture
    WHERE "id_user" = in_user_id;
END;
$$;

-- Delete
CREATE OR REPLACE PROCEDURE delete_user(
    in_user_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "User" WHERE "id_user" = in_user_id;
END;
$$;

