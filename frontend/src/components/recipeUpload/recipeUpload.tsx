import React, { useState, ChangeEvent, useEffect } from 'react'
import uploadImage from '../recipeUpload/image-upload.jpg';
import '../recipeUpload/recipeUpload.css';
import Axios from "axios";

export default function Body(){

  const [uploadImageSrc, setUploadImageSrc] = useState<string | null>(null);
  const [header, setheader] = useState('');
  const [category, setcategory] = useState('');
  const [timeEffort, settimeeffort] = useState('');
  const [stars, setstars] = useState('');
  const [description, setdescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onload = (e) => setUploadImageSrc(e.target?.result as string);
        reader.readAsDataURL(selectedFile);
      const image = new Image();
      image.src = URL.createObjectURL(selectedFile);
  
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
    }
  };
}
  
  const handleChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };


  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstars(e.target.value);
  };
  
  const addRecipe = () => {
    const formData = new FormData();
    formData.append('recipename', header);
    formData.append('recipecategory', category);
    formData.append('recipetime', timeEffort);
    formData.append('reciperating', stars);
    formData.append('recipedescription', description);
    formData.append('recipeingredients', JSON.stringify(ingredients));
    formData.append('recipesteps', JSON.stringify(steps));
    formData.append('recipecreationdate', currentDate);
    // formData.append('id_author', idauthor);

    if (file) {
        formData.append('recipepicture', file);
    }

    Axios.post('http://localhost:3001/addrecipe', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        console.log(response.data);
    });
};

  const [counter, setCounter] = useState(1); // Hier wird der Anfangswert auf 1 gesetzt
  const incrementCounter = () => {
  setCounter(counter + 1); // Die Funktion erhöht den Counter um 1
  };

  const [stepCounter, setStepCounter] = useState(1);
  const incrementStepCounter = () => {
    setStepCounter(stepCounter + 1);
  };


  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString()); // Hier wird der Anfangswert auf das aktuelle Datum gesetzt

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString()); // Die Funktion aktualisiert currentDate täglich
    }, 1000 * 60 * 60 * 24); // Alle 24 Stunden aktualisieren

    return () => clearInterval(interval); // Aufräumen des Intervalls, wenn die Komponente unmountet wird
  }, []);

    
      
return (
<body>
  <div id='template'>
    <div className="form-container">
 
      <div className='recipeInfo'>
      <div className="form-group">
  	    <div className='form-header'> 
            <label htmlFor="headingTop">Header</label>
            <input type="text" id="headingTop" name="Heading" onChange={(e) => { setheader(e.target.value); }} />
        </div>
          
        <div className="form-groupDate">
            <label htmlFor="headingTop">Date: {currentDate.toLocaleString()}</label>
        </div>
      </div> 
        
      </div>
      <div className='wrapperInput'>
        <div className='recipeInfo'>
          <div className="form-groupCategory">
            <label htmlFor="headingTop">Category</label>
            <input type="text" id="headingTop" name="Category" onChange={(e) => { setcategory(e.target.value); }} />
          </div>

        

          <div className="form-groupTimeEffort">
            <label htmlFor="headingTop">Time effort</label>
            <input type="text" id="headingTop" name="Effort" onChange={(e) => { settimeeffort(e.target.value); }} />
          </div>
          
          {/*<div className="form-groupCalories">
            <label htmlFor="headingTop">Calories</label>
            <input type="text" id="headingTop" name="Calories" onChange={(e) => { setcalories(e.target.value); }} />
          </div>*/}
          

          <div className="rating">
          
            {[...Array(5)].map((_, index) => (
              <React.Fragment key={index}>
                <input value={5- index} name="rate" id={`star${5- index}`} type="radio" onChange={handleRatingChange} checked={stars === `${5- index}`} />
                <label title={`${5- index} Sterne`} htmlFor={`star${5- index}`}></label>
              </React.Fragment>
            ))}
          </div>
          
        </div>

 
          
        {/* <div id="heading" >
                <input type="text"/>
                <span>Heading</span>
            </div>*/}
        
        <div className='uploadpicture'>
          <img className='imageUpload' src={uploadImageSrc || uploadImage} id='picture-pic' alt="Uploaded" />
          </div>
      </div>
          <label className='uploadImageLabel' htmlFor="input-file">Upload Image</label>
          <input id='input-file' type="file" accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange} />

      <div className='discription'><textarea className= "discriptionInput" name="Description" placeholder='Description' onChange={(e) => { setdescription(e.target.value); }}></textarea>
        <span className='discriptionSpan'>Description</span>
      </div>

      <br />

      <div className="form-groupIngredient">
        <label htmlFor="ingredientInput">Ingredients</label>
        {[...Array(counter)].map((_, index) => (
          <div key={index}>
            <input
              type="text"
              id={`ingredientInput${index}`}
              name={`Ingredient ${index + 1}`}
              value={ingredients[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <label htmlFor={`ingredientInput${index}`}>{index + 1}</label>
          </div>
        ))}
      </div>

      <button className='addOneMoreIngredient'  onClick={incrementCounter}>Add Ingredient</button>
      <div id='blocker1'></div>
      <div id='blocker1'></div>
      
      <div className="form-groupIngredient">
        <label className="stepsLabel" htmlFor="ingredientInput">Steps</label>
        {[...Array(stepCounter)].map((_, index) => (
          <div key={index}>
            <input
              id={`stepInput${index}`}
              name={`Step ${index + 1}`}
              value={steps[index]}
              onChange={(e) => handleStepChange(index, e.target.value)}
            />
            <label htmlFor={`ingredientInput${index}`}>{index + 1}</label>
          </div>
        ))}
      </div>
      <button className='addOneMoreIngredient' onClick={incrementStepCounter}>Add Step</button>
      <br />
      
      <button className='addOneMoreIngredient'  onClick={addRecipe}>Save Recipe</button>
    
    </div> 
  </div>
</body>

)};