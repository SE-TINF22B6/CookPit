import DisplayRecipe from '../DisplayRecipe/DisplayRecipe'
import './AllRecipes.css'

export default function AllRecipes() {
  return (
    <div id='wrapper'>
        {/* <button className='openOnClick' onClick={() => alert()}> */}
            <DisplayRecipe img={'1'} title={'2'} rating={0} time={0} />
        {/* </button> */}
    </div>
  )
}
