import React, { useState } from 'react'
import '../SearchSite/SearchSite.css';
import icon_search from '../SearchSite/baseline_search_black_24dp.png'



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
                <a id='searchIcon' href="#">
                <img src={icon_search} alt="#"/>
                </a>
            </td>
        </tr>
    </table>
</div>
<br />
<br />
<br />
<div id='mainArea'>
<div id='arrowLeft'>left</div>

<div id='products'>

<div id='left' > 
    left product
    <img src="" alt="" />
</div>


<div id='middle' > middle ptoduct</div>


<div id='right' > right product </div> 

</div>

<div id='arrowRight'>right </div>
</div>
</body>
  )}