import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";
import "./AllRecipes.css";

export default function AllRecipes({ allRecipes }: { allRecipes: any[] }) {
  const items = allRecipes.map((recipe) => {
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
