import React from 'react'
import '../styles/Header.css';
import icon_heart_black from '../img/icon_heart_black.png'

export default function Header() {
  return (
    <header>
      <div className="menu_btn_wrapper"></div>

      <div className="brand_name_wrapper">
        <div id="brand_name">CookPit</div>
        <div id="sub_brand_name">— food & drinks —</div>
      </div>
      
      <div className="utility_wrapper">
        <button id='favourite_recipes'>
          <img src={icon_heart_black} alt="favourite recipes" />
        </button>
        <button>Login</button>
        <div id="language_selection">EN</div>
      </div>
    </header>
  )
}
