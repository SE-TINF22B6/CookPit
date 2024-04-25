import React, { useState } from "react";
import "../SearchSite/SearchSite.css";
import icon_search from "../SearchSite/baseline_search_black_24dp.png";
import left from "../../img/Pfannkuchen.png";
import middle from "../../img/Donut.png";
import right from "../../img/Schokokuchen.png";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import DisplayRecipe from "../DisplayRecipe/DisplayRecipe";

export default function Body() {
  function setLanguage(language: HTMLElement) {
    const activeLanguage = document.getElementById("language_selection");
    activeLanguage!.innerText = language.innerText;
  }

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

      <div id="display_recipes_outer_wrapper">
        <button className="arrow" id="arrleft">
          <div id="inner_left_arrow"></div>
        </button>

        <div id="display_recipes_wrapper">
          <DisplayRecipe
            img={left}
            title={"Pfannkuchen mit Obst"}
            rating={4}
            time={5}
          />
          <DisplayRecipe img={middle} title={"Donuts"} rating={4} time={63} />
          <DisplayRecipe
            img={right}
            title={"Schokoladenkuchen"}
            rating={3}
            time={16}
          />
        </div>

        <button className="arrow" id="arrright">
          <div id="inner_right_arrow"></div>
        </button>
      </div>
    </div>
  );
}
