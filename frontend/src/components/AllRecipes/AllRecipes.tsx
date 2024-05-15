import DisplayRecipe from '../DisplayRecipe/DisplayRecipe'
import './AllRecipes.css'

export default function AllRecipes({ allRecipes }: { allRecipes: any[] }) {

    const items = allRecipes.map((recipe) => {  
        const time = Number(recipe.cook_time) + Number(recipe.prep_time);
        return (
          <DisplayRecipe
            img={recipe.img}
            title={recipe.name}
            rating={recipe.rating}
            time={time}
          />
        );
      });

  return (
    <div id='wrapper'>
        {items}
    </div>
  )
}
