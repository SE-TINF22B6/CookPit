import React, { useState } from 'react'
import '../Background/Background.css';


export default function Background(){

    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;
      }
  return (
<body>
  <table> <tr>
   <td><div id="oval1"></div> </td> 
   <td><div id="oval2"></div></td> 
   <td> <div id="oval3"></div></td> 
   <td><div id="oval4"></div> </td> 
   <td><div id="oval5"></div></td> 
   <td><div id="oval6"></div></td> 
   <td><div id="oval7"></div></td> 
   <td><div id="oval8"></div></td> 
   <td><div id="oval9"></div> </td> 
   <td><div id="oval10"></div></td> 
   <td><div id="oval11"></div></td> 
   <td><div id="oval12"></div></td> 
   <td><div id="oval13"></div></td> 
    </tr></table>
</body>
  )}