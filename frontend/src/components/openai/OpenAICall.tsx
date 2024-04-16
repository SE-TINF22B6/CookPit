import React, { useEffect, useState } from "react";
import "./OpenAI.css";
import ListItem from "./../ListItem/ListItem";

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const showArry = () => {
    console.log(ingredients);
  };

  const clearArray = () => {
    setIngredients([]);
  };

  // eventListenerFunctions
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      const newIngredient = (
        document.getElementById("input") as HTMLInputElement
      ).value;
      if (newIngredient) {
        setIngredients([...ingredients, newIngredient]);
      }
    }
  }

  function handleButtonClick() {
    const newIngredient = (document.getElementById("input") as HTMLInputElement)
      .value;
    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
    }
  }

  // eventListeners
  document.getElementById("input")?.addEventListener("keydown", handleKeyPress);
  document
    .getElementById("addIngredientButton")
    ?.addEventListener("click", handleButtonClick);

  const close = () => {};

  return (
    <div id="box_wrapper_wrapper">
      <div id="box_wrapper">
        <div id="left">
          <input
            id="input"
            type="text"
            value={getUserInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
            placeholder="Enter your ingredients"
          />
          <button id="addIngredientButton">Add Ingredient</button>
          <button onClick={() => showArry()}>show array</button>
          <button onClick={() => clearArray()}>clear array</button>
          <button onClick={() => handleClick(getUserInput)}>
            Make me a recipe
          </button>
          <div id="ingredients">
            {ingredients.map((item, index) => (
              <ListItem closeFunc={close} key={index} name={item} id={index} />
            ))}
          </div>
        </div>
        <div id="right">
          <div id="return"></div>
        </div>
      </div>
    </div>
  );
}

const handleClick = async (userInput: string) => {
  const returnDiv = document.getElementById("return");
  if (userInput === "") {
    returnDiv!.textContent = "";
  } else {
    try {
      const response = await fetch("http://localhost:3001/recipe-maker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });
      const responseData = await response.json(); // Parse response body as JSON
      console.log(responseData); // Server response
      returnDiv!.textContent = responseData.result;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
};
