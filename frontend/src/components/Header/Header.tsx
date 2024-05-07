import React from "react";
import "../Header/Header.css";
import icon_heart_black from "../../img/icon_heart_black.png";
import brand_logo from "../../img/chef-svgrepo-com.svg";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

interface HeaderProps {
  onToggleLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleLogin }) => {
  return (
    <header>
      {/* <Menu /> */}

      <Link className="navigation" id="brand_name" to="/">
        <img src={brand_logo} alt="logo" />
        <div>CookPit</div>
      </Link>

      <div id="nav_wrapper">
        <Link className="navigation" to="/">
          Alle Rezepte
        </Link>
        <div className="seperator">.</div>
        <Link className="navigation" to="/recipe-maker">
          Rezeptgenerator
        </Link>
        <div className="seperator">.</div>
        <Link className="navigation" to="/">
          Rezept hochladen
        </Link>
        <div className="seperator">.</div>
        <Link className="navigation" to="/">
          Konto
        </Link>
      </div>

      {/* <div className="utility_wrapper">
        <button id="favourite_recipes">
          <img src={icon_heart_black} alt="favourite recipes" />
        </button>
        <button id="login_btn" onClick={onToggleLogin}>
          Login
        </button>
      </div> */}
    </header>
  );
};

export default Header;
