import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "../Home/Home.css";
import Background from "../Background/Background";
import Login from "../Login/Login";
import SearchSite from "../SearchSite/SearchSite";
import OpenAI from "../openai/OpenAICall";
import React, { useState } from "react";
import RecipeUpload from "../recipeUpload/recipeUpload";


function Home() {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginVisibility = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <>
      {/* <Background /> */}
      <Header onToggleLogin={toggleLoginVisibility} />
      {loginVisible && <Login />}
      <Routes>
        <Route path="/" element={<SearchSite />} />
        <Route path="/recipe-maker" element={<OpenAI />} />
        <Route path="/upload-recipe" element={<RecipeUpload />} />

      </Routes>
    </>
  );
}

export default Home;
