import React, { useState, useEffect } from 'react';
import '../Header/Header.css';
import icon_heart_black from '../../img/icon_heart_black.png';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Axios from 'axios';
import { response } from 'express';

interface HeaderProps {
  onToggleLogin?: (toggleState: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleLogin }) => {
  const [username, setUsername] = useState('');
  

  const getlogin = () => {
    Axios.post("http://localhost:3001/getlogin", {})
      .then((response) => {
        console.log(response.data.loginmessage);
        setUsername(response.data.loginmessage);
      })
      .catch((error) => {
        console.error('Error while fetching login data:', error);
      });
  };

  const logout = () => {
    Axios.post("http://localhost:3001/logout", {})
      .then((response) => {
        console.log(response.data.logoutmessage);
        setUsername("");
      })
      .catch((error) => {
        console.error('Error while logging out:', error);
      });
  };

  const handleLoginClick = () => {
    getlogin();
    if (onToggleLogin) {
      onToggleLogin(false);
    }
  };

  const handleLogoutClick = () => {
    logout();
  };

  let userbutton;
  let Kontobutton;

  if (username === '') {
    userbutton = "Login";
    Kontobutton = <button id='login_btn' onClick={handleLoginClick}> {userbutton} </button>;
  } else {
    userbutton = username;
    Kontobutton = (
      <div className="dropdown">
        <span>{username}</span>
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
          <a onClick={handleLogoutClick}>Logout</a>
        </div>
      </div>
    );
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
            <CustomLink to={"/"} children={"Overview"}/>
            <div className="separation_line"></div>
            <CustomLink to={"/cake"} children={"Cake"}/>
            <CustomLink to={"/biscuit"} children={"Biscuit"}/>
            <CustomLink to={"/waffles"} children={"Waffles"}/>
            <div className="separation_line"></div>
            <CustomLink to={"/show-all-recipes"} children={"Show all recipes"}/>
            <CustomLink to={"/recipe-maker"} children={"Recipe maker"}/>
            <CustomLink to={"/upload-recipe"} children={"Upload a recipe"}/>
            <CustomLink to={"/my-recipe"} children={"Show my recipes"}/>
            <div className="separation_line"></div>
            <CustomLink to={"/account"} children={"Account"}/>
            <div className="separation_line"></div>
            <CustomLink to={"/imprint"} children={"Imprint"}/>
            <CustomLink to={"/general-data-protection-regulation"} children={"GDPR"}/>
            <CustomLink to={"/terms-of-service"} children={"Terms of Service"}/>
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
        {Kontobutton}
        <div id="language_selection">EN</div>
      </div>
    </header> 
  )
}

export default Header;
