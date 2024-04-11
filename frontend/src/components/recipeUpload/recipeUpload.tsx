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
        const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '', unit: 'ml' }]);

        const addIngredientField = () => {
        setIngredients([...ingredients, { ingredient: '', amount: '', unit: 'ml' }]);
  };

      
        
  return (
<body>
      
    <div id='template'>
    <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>

        <div id="heading" >
            <input type="text"/>
            <span>Heading</span>
        </div>
        <div id='blocker1'></div>
      
        
        
      <img className='imageUpload' src={uploadImageSrc || uploadImage} id='picture-pic' alt="Uploaded" />
      <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label>
      <input id='input-file' type="file" accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange} />
      <div id='blocker1'></div>
       <div id='blocker1'></div>
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
    <div>
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
      <button className='addOneMoreIngredient' onClick={addIngredientField}>Add Ingredient</button>
    </div>
    <div id='blocker1'></div>
    <div id='blocker1'></div>
    
        <div className='discription'><textarea>Discription</textarea>
        <span className='discriptionSpan'>Discription</span>
        </div>

        
        <button className='addOneMoreIngredient' onClick={addIngredientField}>Add Ingredient</button>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
        <div id='blocker1'></div>
    </div> 
    
</body>
  )}