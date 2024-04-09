import React, { useState, ChangeEvent } from 'react'
import uploadImage from '../recipeUpload/image-upload.png';
import '../recipeUpload/recipeUpload.css';



export default function Body(){
    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;}
        const [uploadImageSrc, setUploadImageSrc] = useState<string | null>(null);

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            setUploadImageSrc(URL.createObjectURL(file));
          }
        };
      
      
        
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
        
      <img className='imageUpload' src={uploadImageSrc || uploadImage} id='picture-pic' alt="Uploaded" />
      <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label>
      <input id='input-file' type="file" accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange} />
    
        
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