import React, { useState } from 'react'

export default function OpenAI() {

  const [getUserInput, setUserInput] = useState('');

  return (
    <div id='openai_wrapper'>
      <input type="text" value={getUserInput} onChange={event => {
        setUserInput(event.target.value);
      }} placeholder='Enter your ingredients'/>
      <button onClick={() => handleClick(getUserInput)}>Make me a recipe</button>
    </div>
  )
}

const handleClick = async (userInput: string) => {
  const response = await fetch('http://localhost:3001/recipe-maker', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userInput }),
  });

  const result = await response.json();
  console.log(result);
};