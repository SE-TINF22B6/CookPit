import React, { useState, ChangeEvent } from 'react'
import uploadImage from '../recipeUpload/image-upload.jpg';
import '../recipeUpload/recipeUpload.css';



export default function Body(){
    function setLanguage(language:HTMLElement) {
        const activeLanguage = document.getElementById("language_selection");
        activeLanguage!.innerText = language.innerText;}
        const [uploadImageSrc, setUploadImageSrc] = useState<string | null>(null);

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            const image = new Image();
            image.src = URL.createObjectURL(file);
        
            image.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d')!;
              canvas.width = 480;
              canvas.height = 270;
        
              // Berechne das Seitenverhältnis des Bildes
              const aspectRatio = image.width / image.height;
        
              let width = 500;
              let height = 300;
        
              if (aspectRatio > 500 / 300) {
                // Bild ist breiter als das Zielformat, daher muss die Höhe angepasst werden
                width = 500 * aspectRatio;
              } else {
                // Bild ist höher als das Zielformat, daher muss die Breite angepasst werden
                height = 300 / aspectRatio;
              }
        
              // Zentriere das Bild auf dem Canvas und zeichne es
              const x = (500 - width) / 2;
              const y = (300 - height) / 2;
              ctx.drawImage(image, x, y, width, height);
        
              // Konvertiere den Canvas in eine Daten-URL und setze das Bild
              const croppedImageSrc = canvas.toDataURL();
              setUploadImageSrc(croppedImageSrc);
            };
            
          }
        };
        


      
        
  return (
<body>
 
    <div id='blockerTop'></div>
    <div id='template'>
    <div className="form-container">
 

     <div className="form-group">
          <label htmlFor="headingTop">Header</label>
          <input type="text" id="headingTop" name="Heading" />
        </div>

       
        <div className='recipeInfo'>
        <div className="form-groupCategory">
          <label htmlFor="headingTop">Category</label>
          <input type="text" id="headingTop" name="Category" />
        </div>
        <div className="form-groupTimeEffort">
          <label htmlFor="headingTop">Time effort</label>
          <input type="text" id="headingTop" name="Effort" />
        </div>
        <div className="rating">
            <input value="5" name="rate" id="star5" type="radio"/>
            <label title="text" htmlFor="star5"></label>
            <input value="4" name="rate" id="star4" type="radio"/>
            <label title="text" htmlFor="star4"></label>
            <input value="3" name="rate" id="star3" type="radio"/>
            <label title="text" htmlFor="star3"></label>
            <input value="2" name="rate" id="star2" type="radio"/>
            <label title="text" htmlFor="star2"></label>
            <input value="1" name="rate" id="star1" type="radio"/>
            <label title="text" htmlFor="star1"></label>
        </div>
        
        </div>


        
       {/* <div id="heading" >
              <input type="text"/>
              <span>Heading</span>
           </div>*/}
        <div id='blocker1'></div>
        <img className='imageUpload' src={uploadImageSrc || uploadImage} id='picture-pic' alt="Uploaded" />
      <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label>
      <input id='input-file' type="file" accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange} />

        {/*<div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" >          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
          </div>*/}
     {/*} <img className='imageUpload' src={uploadImageSrc || uploadImage} id='picture-pic' alt="Uploaded" />
      <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label>
      <input id='input-file' type="file" accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange} />
      <div id='blocker1'></div>
        <div id='blocker1'></div>*/}
      {/*<table>
        <th> 
          <div id="ingredient">
            <input type="text"/>
            <span>ingredient</span> 
           </div>
        </th>
        <th className='tabelspace'></th>
        <th className='tabelspace'></th>
        <th> 
          <div id="amount">
            <input type="text"/>
            <span>amount</span> 
           </div>
        </th>

        <th className='tabelspace'></th>
        <th className='tabelspace'></th>
        <th> 
        <select name="foramtation" id="format">
    <optgroup label="Unit">
      <option value="ml">ml</option>
      <option value="l">liter</option>
      <option value="gramm">gramm</option>
      <option value="kg">kg</option>
      <option value="peice">piece</option>

    </optgroup>
    <span>unit</span> 
    </select>
        </th>
         
    </table> 
    <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label> */}
   <div id='blocker1'></div>
   <div id='blocker1'></div>
   <div id='blocker1'></div>


   <div className="form-groupIngredient">
          <label htmlFor="ingredientInput">Ingredients</label>
          <input type="text" id="ingredientInput" name="Ingredient 1" />
          <label htmlFor='ingredientInput'>1</label>
          <input type="text" id="ingredientInput" name="Ingredient 2" />
          <label htmlFor='ingredientInput'>2</label>
          <input type="text" id="ingredientInput" name="Ingredient 3" />
          <label htmlFor='ingredientInput'>3</label>
          <input type="text" id="ingredientInput" name="Ingredient 4" />
          <label htmlFor='ingredientInput'>4</label>
          <input type="text" id="ingredientInput" name="Ingredient 5" />
          <label htmlFor='ingredientInput'>5</label>
          <input type="text" id="ingredientInput" name="Ingredient 6" />
          <label htmlFor='ingredientInput'>6</label>
          <input type="text" id="ingredientInput" name="Ingredient 7" />
          <label htmlFor='ingredientInput'>7</label>
          <input type="text" id="ingredientInput" name="Ingredient 8" />
          <label htmlFor='ingredientInput'>8</label>
          <input type="text" id="ingredientInput" name="Ingredient 9" />
          <label htmlFor='ingredientInput'>9</label>
          <input type="text" id="ingredientInput" name="Ingredient 10" />
          <label htmlFor='ingredientInput'>10</label>

        </div>
    {/*<div>
      <table>
        <thead>
          <tr>
            
            <th>Ingredient</th>
            <th className='tabelspace'></th>
            <th className='tabelspace'></th>
            <th>Amount</th>
            <th className='tabelspace'></th>
            <th className='tabelspace'></th>
            <th className='tabelspace'></th>
            <th className='tabelspace'></th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>
                <div id="ingredient">
                  <input
                    type="text"
                    value={ingredient.ingredient}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].ingredient = e.target.value;
                      setIngredients(newIngredients);
                    }}
                  />
                </div>
              </td>
              <th className='tabelspace'></th>
              <th className='tabelspace'></th>
              <td>
                <div id="amount">
                  <input
                    type="text"
                    value={ingredient.amount}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].amount = e.target.value;
                      setIngredients(newIngredients);
                    }}
                  />
                </div>
              </td>
              <th className='tabelspace'></th>
              <th className='tabelspace'></th>
              <th className='tabelspace'></th>
              <th className='tabelspace'></th>
              <td>
                <div id="format">
                  <select
                    value={ingredient.unit}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].unit = e.target.value;
                      setIngredients(newIngredients);
                    }}
                  >
                    <optgroup label="Unit">
                      <option value="ml">ml</option>
                      <option value="l">liter</option>
                      <option value="gramm">gramm</option>
                      <option value="kg">kg</option>
                      <option value="peice">piece</option>
                    </optgroup>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    <button className='addOneMoreIngredient' onClick={addIngredientField}>Add Ingredient</button>*/}
        <div id='blocker1'></div>
        <div id='blocker1'></div>

        <div className='discription'><textarea name="Description">Discription</textarea>
        <span className='discriptionSpan'>Discription</span>
        </div>

        
        <button className='addOneMoreIngredient'>Add Ingredient</button>
       
      
    </div> 
    </div>
</body>
  )}