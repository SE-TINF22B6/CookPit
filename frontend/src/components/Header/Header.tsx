import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import brand_logo from "../../img/chef-svgrepo-com.svg";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

interface HeaderProps {
  onToggleLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleLogin }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <Link className="navigation" id="brand_name" to="/">
        <img src={brand_logo} alt="logo" />
        <div>CookPit</div>
      </Link>

      {windowWidth > 862 ? (
        <div id="nav_wrapper">
          <Link className="navigation" to="/rezept/alle">
            Alle Rezepte
          </Link>
          <div className="seperator">.</div>
          <Link className="navigation" to="/rezept/generator">
            Rezeptgenerator
          </Link>
          <div className="seperator">.</div>
          <Link className="navigation" to="/rezept/hochladen">
            Rezept hochladen
          </Link>
          <div className="seperator">.</div>
          <button className="navigation" id="login_btn" onClick={onToggleLogin}>
            Login
          </button>
        </div>
      ) : (
        <Drawer onToggleLogin={onToggleLogin} />
      )}
    </header>
  );
};

export default Header;
