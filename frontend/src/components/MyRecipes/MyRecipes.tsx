import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";

export default function MyRecipes({
  allRecipes,
  user_id,
}: {
  allRecipes: any[];
  user_id: any;
}) {
  const items = allRecipes
    .filter((recipe) => recipe.id_author === user_id)
    .map((recipe) => {
      const img = `data:image/jpeg;base64,${recipe.picture}`;
      return (
        <DisplayRecipe
          edit={true}
          id_author={user_id}
          id_recipe={recipe.id_recipe}
          key={recipe.id_recipe}
          img={img}
          title={recipe.name}
          rating={recipe.rating}
          time={recipe.time}
          description={recipe.description}
          creation_date={recipe.creation_date}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      );
    });

  return (
    <div id="wrapper">
      <div id="center_wrapper">{items}</div>
    </div>
  );
}
