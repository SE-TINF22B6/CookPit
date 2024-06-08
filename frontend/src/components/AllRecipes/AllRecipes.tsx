import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";
import "./AllRecipes.css";

export default function AllRecipes({ allRecipes }: { allRecipes: any[] }) {
  const items = allRecipes.map((recipe) => {
    const img = `data:image/jpeg;base64,${recipe.picture}`;
    const time = Number(recipe.cook_time) + Number(recipe.prep_time);
    return (
      <DisplayRecipe
        key={recipe.id}
        img={img}
        title={recipe.name}
        rating={recipe.rating}
        time={time}
        description={recipe.description}
        prepTime={recipe.prep_time}
        cookTime={recipe.cook_time}
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
