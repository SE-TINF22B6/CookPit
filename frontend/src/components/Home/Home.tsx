import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "../Home/Home.css";
import Background from "../Background/Background";
import Login from "../Login/Login";
import SearchSite from "../SearchSite/SearchSite";
import OpenAI from "../openai/OpenAICall";
import React, { useEffect, useState } from "react";
import RecipeUpload from "../recipeUpload/recipeUpload";
import AllRecipes from "../AllRecipes/AllRecipes";
import axios from "axios";
import MyRecipe from "../MyRecipes/MyRecipes";

function Home() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);

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
  }, []);

  return (
    <>
      <Background />
      <Header onToggleLogin={toggleLoginVisibility} />
      {loginVisible && <Login onToggleLogin={toggleLoginVisibility} />}
      <Routes>
        <Route path="/" element={<SearchSite allRecipes={allRecipes} />} />
        <Route
          path="/rezept/alle"
          element={<AllRecipes allRecipes={allRecipes} />}
        />
        <Route path="/rezept/generator" element={<OpenAI />} />
        <Route path="/rezept/hochladen" element={<RecipeUpload />} />
        <Route
          path="/rezept/meine"
          element={<MyRecipe allRecipes={allRecipes} />}
        />
      </Routes>
    </>
  );
}

export default Home;
