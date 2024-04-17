import React, { useState } from "react";
import "./OpenAI.css";
import ListItem from "./../ListItem/ListItem";

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [retDiv, setRetDiv] = useState("");

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
        setTimeout(function () {
          setUserInput("");
        }, 10);
      }
    }
  }

  function handleButtonClick() {
    const newIngredient = (document.getElementById("input") as HTMLInputElement)
      .value;
    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
      setTimeout(function () {
        setUserInput("");
      }, 10);
    }
  }

  // eventListeners
  document.getElementById("input")?.addEventListener("keydown", handleKeyPress);
  document
    .getElementById("addIngredientButton")
    ?.addEventListener("click", handleButtonClick);

  const closeArray = (id: number) => {
    const updatedIngredients = ingredients.filter((_, index) => index !== id);
    setIngredients(updatedIngredients);
  };

  const handleClick = async (userInput: string[]) => {
    setLoading(true); // Start loading
    if (userInput.length === 0) {
      setRetDiv("");
      setLoading(false); // Stop loading
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
        setRetDiv(responseData.result);
      } catch (error) {
        console.error("Error sending data:", error);
      }
      setLoading(false); // Stop loading
    }
  };

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
          <button onClick={() => handleClick(ingredients)}>
            Make me a recipe
          </button>
          <div id="ingredients">
            {ingredients.map((item, index) => (
              <ListItem
                closeFunc={closeArray}
                key={index}
                name={item}
                id={index}
              />
            ))}
          </div>
        </div>
        <div id="right">
          <div id="return">{loading ? "Loading..." : retDiv}</div>
        </div>
      </div>
    </div>
  );
}
