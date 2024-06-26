import "../SearchSite/SearchSite.css";
import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ChangeEvent, useRef } from "react";
import React, { useState } from 'react';

export default function SearchSite({ allRecipes }: { allRecipes: any[] }) {
  let best: Number[] = [];
  for (let i = 0; i < allRecipes.length && best.length < 6; i++) {
    if (allRecipes[i].rating >= 4.5) {
      best.push(allRecipes[i]);
    }
  }

  

  const randomRecipes = allRecipes
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  const items = randomRecipes.map((recipe) => {
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

  const carouselRef = useRef<AliceCarousel>(null);

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  const [heading, setHeading] = useState<string>("Unsere Empfehlungen");
  const [recipes, setRecipes] = useState<string>("items");

  const handleSearch = () => {
    const filteredRecipes = allRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase()) 
    );
    
    const filtered = filteredRecipes.map((recipe) => {
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

    setFilteredRecipes(filtered);
    setHeading("Suchergebnisse");
    setRecipes("filtered");
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div id="outer_wrapper">
      <div id="i_wrapper">
        <div id="search_box_out_wrapper">
          <div id="search_box_wrapper">
            <input type="text" placeholder="Search..." value={searchInput} onChange={handleSearchInput} onKeyDown={handleKeyDown}/>
            <button onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="black"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </div>

        <div id="display_recipes_outer_outer_wrapper">
          <div id="h_wrapper">
            <h3>{heading}</h3>
          </div>
          <div id="display_recipes_outer_wrapper">
            <button
              onClick={handleLeftArrowClick}
              className="arrow"
              id="arrleft"
            >
              <div id="inner_left_arrow"></div>
            </button>

            <div id="display_recipes_wrapper">
              <AliceCarousel
                mouseTracking
                items={recipes === "items" ? items : filteredRecipes}
                autoPlay
                autoPlayInterval={4000}
                disableDotsControls
                disableButtonsControls
                infinite
                responsive={{
                  0: { items: 1 },
                  796: { items: 2 },
                  1079: { items: 3 },
                }}
                paddingLeft={16}
                paddingRight={0}
                ref={carouselRef}
              />
            </div>

            <button
              onClick={handleRightArrowClick}
              className="arrow"
              id="arrright"
            >
              <div id="inner_right_arrow"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
