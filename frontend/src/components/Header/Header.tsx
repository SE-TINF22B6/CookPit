import React, { useState } from "react";
import "../Header/Header.css";
import icon_heart_black from "../../img/icon_heart_black.png";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

interface HeaderProps {
  onToggleLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleLogin }) => {
  function setLanguage(language: HTMLElement) {
    const activeLanguage = document.getElementById("language_selection");
    activeLanguage!.innerText = language.innerText;
  }

  return (
    <header>
      <nav className="menu_btn_wrapper">
        <input className="checkbox" type="checkbox" id="menu_checkbox" />
        <label htmlFor="menu_checkbox" id="menu_label">
          <div className="hamburger_lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </label>
        <div className="menu_items">
          <div className="menu_items_wrapper" id="miw">
            <CustomLink to={"/"} children={"Overview"} />
            <div className="separation_line"></div>
            <CustomLink to={"/cake"} children={"Cake"} />
            <CustomLink to={"/biscuit"} children={"Biscuit"} />
            <CustomLink to={"/waffles"} children={"Waffles"} />
            <div className="separation_line"></div>
            <CustomLink
              to={"/show-all-recipes"}
              children={"Show all recipes"}
            />
            <CustomLink to={"/recipe-maker"} children={"Recipe maker"} />
            <CustomLink to={"/upload-recipe"} children={"Upload a recipe"} />
            <CustomLink to={"/my-recipe"} children={"Show my recipes"} />
            <div className="separation_line"></div>
            <CustomLink to={"/account"} children={"Account"} />
            <div className="separation_line"></div>
            <CustomLink to={"/imprint"} children={"Imprint"} />
            <CustomLink
              to={"/general-data-protection-regulation"}
              children={"GDPR"}
            />
            <CustomLink
              to={"/terms-of-service"}
              children={"Terms of Service"}
            />
          </div>
        </div>
      </nav>

      <div className="brand_name_wrapper">
        <div id="brand_name">CookPit</div>
        <div id="sub_brand_name">— food & drinks —</div>
      </div>

      <div className="utility_wrapper">
        <button id="favourite_recipes">
          <img src={icon_heart_black} alt="favourite recipes" />
        </button>
        <button id="login_btn" onClick={onToggleLogin}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
