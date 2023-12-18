/*
@dev: This procedure adds a recipe to a user's favorites
@param: in_id_user: INT - ID of the user (optional)
		in_id_recipe: INT - ID of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE add_favorite_recipe(
    in_id_user INT DEFAULT NULL,
    in_id_recipe INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Adds the provided recipe to the user's favorites
    INSERT INTO "FavoriteRecipes" ("id_user", "id_recipe")
    VALUES (in_id_user, in_id_recipe);
END;
$$;

/*
@dev: This procedure retrieves a user's favorite recipes
@param: in_id_user: INT - ID of the user (required)
@returns: List of favorite recipes for the provided user
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE get_favorite_recipes_for_user(
    in_id_user INT
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Retrieves favorite recipes for the given user
    RETURN QUERY SELECT * FROM "FavoriteRecipes" WHERE "id_user" = in_id_user;
END;
$$;

/*
@dev: There is no practical update operation for a table like FavoriteRecipes
@returns: None
@dev: Andres Masis
*/
-- There is no practical update operation for a table like FavoriteRecipes
-- since it usually only contains pairs of user and recipe IDs


/*
@dev: This procedure removes a recipe from a user's favorites
@param: in_id_user: INT - ID of the user (optional)
		in_id_recipe: INT - ID of the recipe (optional)
@returns: None
@dev: Andres Masis
*/
CREATE OR REPLACE PROCEDURE remove_favorite_recipe(
    in_id_user INT DEFAULT NULL,
    in_id_recipe INT DEFAULT NULL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Removes the provided recipe from the user's favorites
    DELETE FROM "FavoriteRecipes" WHERE "id_user" = in_id_user AND "id_recipe" = in_id_recipe;
END;
$$;
