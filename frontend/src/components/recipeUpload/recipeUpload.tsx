import React, { useState } from 'react'
import '../recipeUpload/recipeUpload.css';




export default function Body(){
    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;}
    
  return (
<body>
    
    <div id='template'>
        <div id="inputBox" >
            <input type="text"/>
            <span>Heading</span>
        </div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id="inputBox">
            <input type="text"/>
            <span>Heading</span>
        </div>
        <div id="inputBox">
            <input type="text"/>
            <span>Heading</span>
        </div>
    </div> 
</body>
  )}