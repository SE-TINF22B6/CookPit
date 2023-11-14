import React, { useState } from 'react'
import '../Header/Header.css';
import icon_heart_black from '../../img/icon_heart_black.png'

export default function Header() {

  function setLanguage(language:HTMLElement) {
    const activeLanguage = document.getElementById("language_selection");
    activeLanguage!.innerText = language.innerText;
  }

  return (
    <header>
      <nav className="menu_btn_wrapper">
        <input className="checkbox" type="checkbox" id='menu_checkbox'/>
        <label htmlFor="menu_checkbox" id='menu_label'>
          <div className="hamburger_lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>  
        </label>
        <div className="menu_items">
          <div className="menu_items_wrapper" id='miw'>
            <li><a href="#">Overview</a></li>
            <div className="separation_line"></div>
            <li><a href="#">Cake</a></li>
            <li><a href="#">Biscuit</a></li>
            <li><a href="#">Waffles</a></li>
            <div className="separation_line"></div>
            <li><a href="#">Show all recipes</a></li>
            <li><a href="#">Upload a recipe</a></li>
            <li><a href="#">Show my recipes</a></li>
            <div className="separation_line"></div>
            <li><a href="#">Account</a></li>
            <div className="separation_line"></div>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Terms of Service</a></li>
          </div>
        </div>
      </nav>

      <div className="brand_name_wrapper">
        <div id="brand_name">CookPit</div>
        <div id="sub_brand_name">— food & drinks —</div>
      </div>
      
      <div className="utility_wrapper">
        <button id='favourite_recipes'>
          <img src={icon_heart_black} alt="favourite recipes" />
        </button>
        <button id='login_btn'>Login</button>

        <div id="language_selection">EN</div>
        <div className="lang_wrapper">
          <div onClick={() => setLanguage(document.getElementById("lang_en")!)} id="lang_en">EN</div>
          <div onClick={() => setLanguage(document.getElementById("lang_de")!)} id="lang_de">DE</div>
        </div>
      </div>
    </header> 
  )
}
