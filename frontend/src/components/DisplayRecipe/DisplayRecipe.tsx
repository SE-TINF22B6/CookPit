import { AiOutlineStar } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import './DisplayRecipe.css'
import icon_heart_black from '../../img/icon_heart_black.png';

type DisplayRecipeProps = {
    img: string
    title: string,
    rating: number,
    time: number
}

export default function DisplayRecipe({img, title, rating, time}:DisplayRecipeProps) {
  
    return (
    <div id='display_recipe_wrapper'>
        <button id='save_to_favourite_recipes'>
          <img src={icon_heart_black} alt="save to favourites" />
        </button>
        <img src={img} alt="" />
        <div id="display_recipe_footer">
            <div id="recipe_title" className='hover-text'>
                {title}
                <span className="tooltip-text">{title}</span>
            </div>
            <div id='sec_row'>
                <div id="recipe_time"><BsClock /> {time} min</div>
                <div id="recipe_rating"><AiOutlineStar /> {rating}/5</div>
            </div>
        </div>
    </div>
  )
}
