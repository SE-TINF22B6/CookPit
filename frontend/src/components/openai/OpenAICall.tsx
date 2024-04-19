import React, { useState } from "react";
import "./OpenAI.css";
import ListItem from "./../ListItem/ListItem";

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [retDiv, setRetDiv] = useState("");

  function handleKeyPress(event: string) {
    if (event === "Enter") {
      if (getUserInput) {
        setIngredients([...ingredients, getUserInput]);
        setUserInput("");
      }
    }
  }

  function handleButtonClick() {
    if (getUserInput) {
      setIngredients([...ingredients, getUserInput]);
      setUserInput("");
    }
  }

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
        // const formattedText = responseData.result.replace(/\n/g, "<br>");
        const formattedText = responseData.result
          .split("\n")
          .map(
            (
              line:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            )
          );
        setRetDiv(formattedText);
      } catch (error) {
        console.error("Error sending data:", error);
      }
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div id="outer_wrapper">
        <div id="inner_wrapper">
          <div id="left_half">
            <div id="input_wrapper">
              <input
                type="text"
                value={getUserInput}
                onChange={(event) => {
                  setUserInput(event.target.value);
                }}
                onKeyDown={(event) => handleKeyPress(event.key)}
                placeholder="Enter your ingredients"
              />
              <button onClick={() => handleButtonClick()}>Add</button>
            </div>
            <div>
              <ul id="list">
                {ingredients.map((item, index) => (
                  <ListItem
                    closeFunc={closeArray}
                    key={index}
                    name={item}
                    id={index}
                  />
                ))}
              </ul>
            </div>
            <div id="create_recipe_wrapper">
              <button onClick={() => handleClick(ingredients)}>create</button>
            </div>
          </div>
          <div id="right_half">
            <div>{loading ? "Loading..." : retDiv}</div>
          </div>
        </div>
      </div>
    </>
  );
}
