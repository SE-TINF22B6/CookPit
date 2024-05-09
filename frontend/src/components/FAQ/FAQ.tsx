import React, { useState } from 'react'
import '../FAQ/FAQ.css';


export default function Background(){

    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;
      }
  return (
<body>

    <div id='blockerTop'></div>
    <div id="container">
    <div className="form-container">
        
    <div className="impressumContainer">
    <h1>Impressum</h1>

    <h2>Angaben gemäß § 5 TMG</h2>

    <p>Max Mustermann </p><br/>
    <p>Musterstraße 1 </p><br/>
   <p> Gebäude 2 </p><br/>
   <p> 34567 Musterstadt</p>

    <h2>Kontakt</h2>
    <p>Telefon: +49 (0) 123 44 55 66 </p><br/>
    <p>Telefax: +49 (0) 123 44 55 99</p><br/>
   <p>E-Mail: mustermensch@domain.de</p>
</div>
<div className="blocker"></div>
<div className="blocker"></div>
    <div className="faqLabel">  Frequently asked questions</div>
        <div className="blocker2"></div>
        <div className="tooltip">
             What is CookPit?
            <div className="tooltiptext">CookPit is a cookery website where users can share recipes and have recipes developed with the help of AI</div>
        </div>
        <div id='blocker'></div>
        <div className="tooltip">
        How can I upload recipes and share them with the community?
            <div className="tooltiptext">To upload a recipe to cookpit you must have created an account and be logged in with it. You can then upload your recipe under Recipe Upload.</div>
        </div>
        <div id='blocker'></div>
        <div className="tooltip">
        How to create an account for CookPit?
            <div className="tooltiptext">You can easily create an account by clicking on the login button at the top right and then clicking on the register link. You can then enter your account details and create an account</div>
        </div>
        <div id='blocker'></div>
        <div className="tooltip">
        How do I find and save recipes?
            <div className="tooltiptext">You can easily search for recipes on our home page using the search function. Alternatively, you can browse through recipes in the individual categories. When you have found a recipe you can click on the heart to save it</div>
        </div>
        <div id='blocker'></div>
        <div className="tooltip">
            I have forgotten my password what now?
            <div className="tooltiptext">If you have forgotten the password for your account, it's no big deal. Just write us an email at: cookpit@support.com and we will help you as soon as possible</div>
        </div>
    </div>
    </div>

</body>
  )}