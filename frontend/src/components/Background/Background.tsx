import React, { useEffect, useState } from 'react'
import '../Background/Background.css';


export default function Background(){

    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;
      }

     useEffect(() => {
      let numOfPillar = Math.floor(window.innerWidth / 130);
      const ovalWrapper = document.getElementById("oval_wrapper");
      
      // Clear existing divs
      while (ovalWrapper?.firstChild) {
        ovalWrapper.removeChild(ovalWrapper.firstChild);
      }
  
      for (let index = 0; index < numOfPillar; index++) {
        const div = document.createElement("div");
        div.className = "oval";
        ovalWrapper?.appendChild(div);
      }
    }, []);


  return (
    <div id="oval_wrapper"></div>
  )}