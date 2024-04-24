import React, { useState } from "react";
import "./OpenAI.css";
import ListItem from "./../ListItem/ListItem";
import jsPDF from "jspdf";

export default function OpenAICall() {
  const [getUserInput, setUserInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [retDiv, setRetDiv] = useState("");
  const [retPdf, setRetPdf] = useState("");
  const [pdfName, setPdfName] = useState("");

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
        setRetPdf(responseData.result)
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
        setPdfName(formattedText[0].props.children[0]);

      } catch (error) {
        console.error("Error sending data:", error);
      }
      setLoading(false); // Stop loading
    }
  };

  const doc = new jsPDF();
  const maxWidth = 160;
  const downloadPdf = (text:string, name:string) => {
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.text(splitText, 10, 10);
    doc.save(name+".pdf");
  }

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
          <button id="downloadPdf" onClick={() => downloadPdf(retPdf, pdfName)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>
          </button>
        </div>
      </div>
    </>
  );
}
