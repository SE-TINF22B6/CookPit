import React, { useState } from "react";

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");

  return (
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
  );
}

const handleClick = async (userInput: string) => {
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
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
