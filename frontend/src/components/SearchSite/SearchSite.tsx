import React, { useState } from 'react'
import '../SearchSite/SearchSite.css';
import icon_search from '../SearchSite/baseline_search_black_24dp.png'



export default function Body(){
    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;}
    
  return (
    <div id='wrapper'>
        <div id='searchBoxContainer'>
            <table id='searchElementsContainer'>
                <tr>
                    <td>
                        <input type="text" placeholder='Search' id='searchInput'  />
                    </td>
                    <td>
                        <a id='searchIcon' href="#">
                        <img src={icon_search} alt="#"/>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
        <div id='mainArea'>
            <div id='arrowLeft'></div>
            <div id='placeholder' > here can be your recipe</div> 
            <div id='arrowRight'>Hi</div>
        </div>
    </div>
  )}