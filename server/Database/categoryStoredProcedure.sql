-- Create

/*
@dev: This procedure creates (inserts) a new category in the database
@param: category_name: VARCHAR(25)
		category_description: VARCHAR(1000)
@returns: None
@dev: Andres Masis
*/

CREATE OR REPLACE PROCEDURE insert_category(
    category_name VARCHAR(25),
    category_description VARCHAR(1000)
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO public."Category"(
        name, description)
    VALUES (category_name, category_description);
END;
$$;





-- Read

/*
@dev: This procedure gets the catgories filtered
@param:  None
@returns: a table with the result of the query
		  including the fields of id_category, name and description
@dev: Andres Masis
*/
CREATE OR REPLACE FUNCTION getAllCategories()
RETURNS TABLE (id_category INTEGER, name VARCHAR(25), description VARCHAR(1000))
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT id_category, name, description
  FROM public."Category";
END;
$$;



/*
@dev: This procedure gets the catgories filtered by category, name and description
	  All these filters are optional, if you do not want to filter by one of these criteria
	  just do not send anything in that parameter
@param:  filter_id_category: INT,
  		 filter_name: VARCHAR(25),
  		 filter_description: VARCHAR(1000)
@returns: a table with the result of the query
		  including the fields of id_category, name and description
		  given the filter criteria
@dev: Andres Masis
*/
CREATE OR REPLACE FUNCTION getCategoriesByFilter(
  filter_id_category INT DEFAULT NULL,
  filter_name VARCHAR(25) DEFAULT NULL,
  filter_description VARCHAR(1000) DEFAULT NULL
)
RETURNS TABLE (
  id_category INT,
  name VARCHAR(25),
  description VARCHAR(1000)
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT id_category, name, description
  FROM public."Category"
  WHERE (filter_id_category IS NULL OR id_category = filter_id_category)
    AND (filter_name IS NULL OR name = filter_name)
    AND (filter_description IS NULL OR description = filter_description);
END;
$$;

-- UPDATE

/*
@dev: This procedure updates a category given its id
	  The name and description can be updated
	  both are optional, if you do not want to update
	  one, just keep that in null
@param: id_category: INTEGER
		name: VARCHAR(25)
		description: VARCHAR(1000)
@returns: None
@author: Andres Masis 
*/
CREATE OR REPLACE PROCEDURE updateCategory(
  IN id_category INTEGER,
  IN name VARCHAR(25) DEFAULT NULL,
  IN description VARCHAR(1000) DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE public."Category"
  SET name = COALESCE(name, public."Category".name),
      description = COALESCE(description, public."Category".description)
  WHERE id_category = updateCategory.id_category;
END;
$$;


-- DELETE

/*
@dev: This procedure deletes a category given its id
@param: id_category: INTEGER
@returns: None
@author: Andres Masis 
*/
CREATE OR REPLACE PROCEDURE deleteCategory(
  IN id_category INTEGER,
)
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM public."Category"
  WHERE id_category = deleteCategory.id_category;
END;
$$;




