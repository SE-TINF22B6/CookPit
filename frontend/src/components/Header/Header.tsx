import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import brand_logo from "../../img/chef-svgrepo-com.svg";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Axios from "axios";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { Divider, List } from "@mui/material";

interface HeaderProps {
  onToggleLogin?: () => void;
  username?: string;
  emptyusername?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleLogin, username, emptyusername }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const logout = () => {
    Axios.post("http://localhost:3001/logout", {})
      .then((response) => {
        console.log(response.data.loginmessage);
        if (emptyusername) {
          emptyusername();
        }
      })
      .catch((error) => {
        console.error("Error while logging out:", error);
      });
  };

  const handleLoginClick = () => {
    if (onToggleLogin) {
      onToggleLogin();
    }
  };
  const handleLogoutClick = () => {
    logout();
  }

  let userbutton;
  let Kontobutton;
  if (username === "") {
    userbutton = "Login";
    Kontobutton = (
      <button className="navigation" id="login_btn" onClick={handleLoginClick}>
        {userbutton}
      </button>
    );
  } else {
    userbutton = username;
    Kontobutton = (
      <Dropdown>
        <MenuButton className="navigation">{userbutton}</MenuButton>
        <Menu className="dropdown_item" slots={{ listbox: List }}>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/rezept/meine"
          >
            Meine Rezepte
          </Link>
          <Divider />
          <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
        </Menu>
      </Dropdown>
    );
  }
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
          {Kontobutton}
        </div>
      ) : (
        <Drawer onToggleLogin={onToggleLogin} />
      )}
    </header>
  );
};

export default Header ;
