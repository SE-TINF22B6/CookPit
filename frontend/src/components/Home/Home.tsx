import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Background from "../Background/Background";
import Login from "../Login/Login";
import SearchSite from "../SearchSite/SearchSite";
import OpenAI from "../openai/OpenAICall";
import React, { useEffect, useState } from "react";
import RecipeUpload from "../recipeUpload/recipeUpload";
import AllRecipes from "../AllRecipes/AllRecipes";
import axios from "axios";
import MyRecipe from "../MyRecipes/MyRecipes";
import EditRecipe from "../EditRecipe/EditRecipe";

function Home() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [userID, setUserID] = useState<string | null>(null);

  const handleDataFromLogin = (data: React.SetStateAction<string>) => {
    setUsername(data);
  };

  const emptyusername = () => {
    setUsername("");
  };

  useEffect(() => {
    console.log(username); // This will log whenever childData changes
    console.log(userID?.toString); // This will log whenever childData changes
    if (username) {
      // Stellen Sie sicher, dass username nicht leer ist
      axios
        .post("http://localhost:3001/getuserid", { username })
        .then((response) => {
          console.log(response.data.result);
          setUserID(response.data.result);
        })
        .catch((error) => {
          console.error("Fehler beim Abrufen der UserID", error);
        });
    }
  }, [username]);

  const toggleLoginVisibility = () => {
    setLoginVisible(!loginVisible);
  };

  const getallrecipe = () => {
    axios
      .post("http://localhost:3001/getallrecipe", {})
      .then((response: { data: any }) => {
        setAllRecipes(response.data.results);
        console.log(response.data.results);
      });
  };

  useEffect(() => {
    getallrecipe();
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:3001/verifyToken", { token })
        .then((response) => {
          console.log(
            "Token verification, Token valid?",
            response.data.isValid
          );
          setIsAuthenticated(response.data.isValid);
        })
        .catch((error) => {
          console.error("Token verification failed", error);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
      console.log("No token found");
    }
  }, []);

  return (
    <>
      <Background />
      <Header
        onToggleLogin={toggleLoginVisibility}
        username={username}
        emptyusername={emptyusername}
      />
      {loginVisible && (
        <Login
          onData={handleDataFromLogin}
          onToggleLogin={toggleLoginVisibility}
        />
      )}
      <Routes>
        <Route path="/" element={<SearchSite allRecipes={allRecipes} />} />
        <Route
          path="/rezept/alle"
          element={<AllRecipes allRecipes={allRecipes} />}
        />
        <Route path="/rezept/generator" element={<OpenAI />} />
        <Route
          path="/rezept/hochladen"
          element={<RecipeUpload id_author={userID} />}
        />
        <Route
          path="/rezept/meine"
          element={<MyRecipe allRecipes={allRecipes} user_id={userID} />}
        />
        <Route
          path="/rezept/bearbeiten/id/:id_recipe"
          element={<EditRecipe allRecipes={allRecipes} id_author={userID} />}
        />
      </Routes>
    </>
  );
}

export default Home;
