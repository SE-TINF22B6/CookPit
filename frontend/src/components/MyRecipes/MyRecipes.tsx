import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";

export default function MyRecipes({
  allRecipes,
  id_author,
}: {
  allRecipes: any[];
  id_author: string;
}) {
  const items = allRecipes
    .filter((recipe) => recipe.id_author === id_author)
    .map((recipe) => {
      const img = `data:image/jpeg;base64,${recipe.picture}`;
      return (
        <DisplayRecipe
          id_author={recipe.id_author}
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
