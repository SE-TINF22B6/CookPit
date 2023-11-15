import React, { useState } from 'react'
import '../SearchSite/SearchSite.css';



export default function Body(){
    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;}
    
  return (
<body>
<div id='searchBoxContainer'>
    <table id='searchElementsContainer'>
        <tr>
            <td>
                <input type="text" placeholder='Search' id='searchInput'  />
            </td>
            <td>
                <a href="#"></a>
            </td>
        </tr>
    </table>
</div>
</body>
  )}