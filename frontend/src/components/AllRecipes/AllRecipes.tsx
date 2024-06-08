import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";
import "./AllRecipes.css";

export default function AllRecipes({ allRecipes }: { allRecipes: any[] }) {
  const items = allRecipes.map((recipe) => {
    // Assuming recipe.category contains the base64 string without the data:image prefix
    const img = `data:image/jpeg;base64,${recipe.picture}`; // Adjust MIME type as needed
    const time = Number(recipe.cook_time) + Number(recipe.prep_time);
    return (
      <DisplayRecipe
        key={recipe.id} // Make sure to use a unique key for each item
        img={img}
        title={recipe.name}
        rating={recipe.rating}
        time={time}
      />
    );
  });

  return (
    <div id="wrapper">
      <div id="center_wrapper">{items}</div>
    </div>
  );
}
