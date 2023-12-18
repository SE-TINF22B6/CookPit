/*
@dev: This procedure inserts a new image into the database
@param: in_file_location: VARCHAR(255) - File location of the image (optional)
		in_name: VARCHAR(25) - Name of the image (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE insert_image(
    in_file_location VARCHAR(255) DEFAULT NULL,
    in_name VARCHAR(25) DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Insert a new image into the Image table
    INSERT INTO "Image" ("file_location", "name")
    VALUES (in_file_location, in_name);
END;
$$;

/*
@dev: This procedure retrieves an image by its ID or retrieves all images if no specific ID is provided
@param: in_image_id: INT - ID of the image (optional)
@returns: Specific image if ID provided, otherwise all images
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_image(
    in_image_id INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF in_image_id IS NOT NULL THEN
        -- Retrieve specific image by ID
        SELECT *
        FROM "Image"
        WHERE "id_image" = in_image_id;
    ELSE
        -- Retrieve all images if no specific ID provided
        SELECT *
        FROM "Image";
    END IF;
END;
$$;

/*
@dev: This procedure updates an image's file location and name given its ID
@param: in_image_id: INT - ID of the image to update
		in_new_file_location: VARCHAR(255) - New file location of the image (optional)
		in_new_name: VARCHAR(25) - New name of the image (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE update_image(
    in_image_id INT,
    in_new_file_location VARCHAR(255) DEFAULT NULL,
    in_new_name VARCHAR(25) DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Update the image's file location and name in the Image table
    UPDATE "Image"
    SET "file_location" = COALESCE(in_new_file_location, "file_location"),
        "name" = COALESCE(in_new_name, "name")
    WHERE "id_image" = in_image_id;
END;
$$;

/*
@dev: This procedure deletes an image given its ID
@param: in_image_id: INT - ID of the image to delete
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE delete_image(
    in_image_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Delete the image from the Image table
    DELETE FROM "Image"
    WHERE "id_image" = in_image_id;
END;
$$;
