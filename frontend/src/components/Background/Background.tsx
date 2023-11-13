import React, { useState } from 'react'
import '../Background/Background.css';


export default function Background(){

    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;
      }
  return (
<body>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div id="oval1"></div>
    <div id="oval2"></div>
    <div id="oval3"></div>
    <div id="oval4"></div> 
    <div id="oval5"></div>
    <div id="oval6"></div>
    <div id="oval7"></div>
    <div id="oval8"></div>
    <div id="oval9"></div> 
    <div id="oval10"></div>
    <div id="oval11"></div>
    <div id="oval12"></div>
    <div id="oval13"></div>
</body>
  )}