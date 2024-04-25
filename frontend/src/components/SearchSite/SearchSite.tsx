import React, { useState } from 'react'
import '../SearchSite/SearchSite.css';
import icon_search from '../SearchSite/baseline_search_black_24dp.png'
import left from '../../img/Pfannkuchen.png';
import middle from '../../img/Donut.png';
import right from '../../img/Schokokuchen.png';
import { BsClock } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

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
            
            {/* <div id='arrowLeft'><VscChevronLeft /></div> */}

                <div id='products'>

                    <div id='left' > 
                        <img id='picture_Left'  src={left} alt="favourite recipes" />
                        <div id='footerleft'>
                            <h4>           
                                Pfannkuchen <br></br>
                                <BsClock /> 5 min        <AiOutlineStar /> 4/5
                            </h4>
                        </div>
                    </div>


                    <div id='middle' > 
                        <img id='picture_Middle'  src={middle} alt="favourite recipes" />
                        <div id='footermiddle'>
                            <h4>           
                                Donuts <br></br>
                                <BsClock /> 5 min        <AiOutlineStar /> 4/5
                            </h4>
                        </div>
                    </div>


                    <div id='right' > 
                        <img id='picture_Right'  src={right} alt="favourite recipes" />
                        <div id='footerright'>
                            <h4>           
                                Schokokuchen <br></br>
                                <BsClock /> 5 min        <AiOutlineStar /> 4/5
                            </h4>
                        </div> 
                    </div> 

                </div>
                
                {/* <div id='arrowRight'><VscChevronRight /> </div> */}

        </div>
        <button id='arrleft'> <div></div> </button>
        <button id='arrright'> <div></div> </button>
    </div>
  )}