import React, { useState } from "react";
import './OpenAI.css';

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");

  return (
    <div className="wrapperT">
      <div id="openai_wrapper">
        <input
          type="text"
          value={getUserInput}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
          placeholder="Enter your ingredients"
          />
        <button onClick={() => handleClick(getUserInput)}>
          Make me a recipe
        </button>
      </div>
      <div id="return">test</div>
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
