import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import brand_logo from "../../img/chef-svgrepo-com.svg";
import { Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Axios from "axios";
import { response } from "express";
import { IoClose } from "react-icons/io5";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { Divider, List } from "@mui/material";

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

  const [username, setUsername] = useState("");
  const getlogin = () => {
    Axios.post("http://localhost:3001/getlogin", {})
      .then((response) => {
        console.log(response.data.loginmessage);
        setUsername(response.data.loginmessage);
      })
      .catch((error) => {
        console.error("Error while fetching login data:", error);
      });
  };

  const logout = () => {
    Axios.post("http://localhost:3001/logout", {})
      .then((response) => {
        console.log(response.data.logoutmessage);
        setUsername("");
      })
      .catch((error) => {
        console.error("Error while logging out:", error);
      });
  };

  const handleLoginClick = () => {
    getlogin();
    if (onToggleLogin) {
      onToggleLogin();
    }
  };

  const handleLogoutClick = () => {
    logout();
  };

  const getrecipes = () => {
    Axios.post("http://localhost:3001/getallrecipe", {})
      .then((response) => {
        console.log(response.data.results.length);
      })
      .catch((error) => {
        console.error("Error while logging out:", error);
      });
  };

  let userbutton;
  let Kontobutton;
  if (username === "") {
    userbutton = "Login";
    Kontobutton = (
      <button className="navigation" id="login_btn" onClick={handleLoginClick}>
        {" "}
        {userbutton}{" "}
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

export default Header;
