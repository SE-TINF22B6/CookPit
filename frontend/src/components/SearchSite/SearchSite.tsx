import "../SearchSite/SearchSite.css";
import left from "../../img/Pfannkuchen.png";
import middle from "../../img/Donut.png";
import right from "../../img/Schokokuchen.png";
import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MouseEvent, useRef } from "react";

export default function Body() {
  const items = [
    <DisplayRecipe
      img={left}
      title={"Pfannkuchen mit Obst"}
      rating={4}
      time={5}
    />,
    <DisplayRecipe
      img={middle}
      title={"Streuseldonuts"}
      rating={4}
      time={63}
    />,
    <DisplayRecipe
      img={right}
      title={"Schokoladenkuchen"}
      rating={3}
      time={16}
    />,
    <DisplayRecipe
      img={left}
      title={"2Pfannkuchen mit Obst"}
      rating={4}
      time={5}
    />,
    <DisplayRecipe
      img={middle}
      title={"2Streuseldonuts"}
      rating={4}
      time={63}
    />,
    <DisplayRecipe
      img={right}
      title={"2Schokoladenkuchen"}
      rating={3}
      time={16}
    />,
  ];

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

  return (
    <div id="wrapper">
      <div id="search_box_out_wrapper">
        <div id="search_box_wrapper">
          <input type="text" placeholder="Search..." />
          <button>
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
          <h3>Unsere Empfehlungen</h3>
        </div>
        <div id="display_recipes_outer_wrapper">
          <button onClick={handleLeftArrowClick} className="arrow" id="arrleft">
            <div id="inner_left_arrow"></div>
          </button>

          <div id="display_recipes_wrapper">
            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay
              autoPlayInterval={4000}
              disableDotsControls
              disableButtonsControls
              infinite
              responsive={{
                0: { items: 1 },
                768: { items: 3 },
              }}
              paddingLeft={17}
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
  );
}
