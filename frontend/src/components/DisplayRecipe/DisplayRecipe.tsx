import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./DisplayRecipe.css";
import icon_heart_black from "../../img/icon_heart_black.png";
import { Card, CardMedia, CardContent, Rating, Grid, List, ListItem, ListItemText } from '@mui/material';
import Donut from '../../img/donut.jpg';

type DisplayRecipeProps = {
  img: string;
  title: string;
  rating: number;
  time: number;
};

export default function DisplayRecipe({
  img,
  title,
  rating,
  time,
}: DisplayRecipeProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll' as 'scroll',
    maxHeight: '90vh',
  };

  const recipe = {
    title: "Delicious Chocolate Cake",
    image: "./img/donut.jpg",
    description: "This chocolate cake is rich, moist, and perfect for any chocolate lover.",
    rating: 4.5,
    prepTime: "20 mins",
    cookTime: "45 mins",
    ingredients: [
      "1 3/4 cups all-purpose flour",
      "1 1/2 teaspoons baking powder",
      "2 cups granulated sugar",
      "3/4 cup unsweetened cocoa powder",
      "1 1/2 teaspoons baking soda",
      "1 teaspoon salt",
      "2 large eggs",
      "1 cup whole milk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup boiling water"
    ],
    steps: [
      "Preheat your oven to 350°F (175°C) and grease and flour two 9-inch round baking pans.",
      "In a large bowl, stir together the flour, sugar, cocoa, baking powder, baking soda, and salt.",
      "Add the eggs, milk, oil, and vanilla, and mix for 2 minutes on medium speed of a mixer.",
      "Stir in the boiling water last. The batter will be thin. Pour evenly into the prepared pans.",
      "Bake for 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick.",
      "Cool in the pans for 10 minutes, then remove to a wire rack to cool completely."
    ]
  };

  return (
    <div id="display_recipe_wrapper">
      <button id="save_to_favourite_recipes">
        <img src={icon_heart_black} alt="save to favourites" />
      </button>
      <img onClick={handleOpen} src={img} alt="" />
      <div onClick={handleOpen} id="display_recipe_footer">
        <div id="recipe_title" className="hover-text">
          {title}
          <span className="tooltip-text">{title}</span>
        </div>
        <div id="sec_row">
          <div id="recipe_time">
            <BsClock /> {time} min
          </div>
          <div id="recipe_rating">
            <AiOutlineStar /> {rating}/5
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox" sx={style} onClick={(event) => event.stopPropagation()}>
          <Card sx={{ maxWidth: 800, margin: 'auto', mt: 1 }}>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                {recipe.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={recipe.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {recipe.rating} stars
                </Typography>
              </Box>
              <CardMedia
                component="img"
                height="400"
                image={recipe.image}
                alt={recipe.title}
              />
              <Typography variant="body1" color="text.secondary" paragraph>
                {recipe.description}
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Prep Time: {recipe.prepTime}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Cook Time: {recipe.cookTime}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" component="div" gutterBottom>
                Ingredients
              </Typography>
              <List>
                {recipe.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" component="div" gutterBottom>
                Steps
              </Typography>
              <List>
                {recipe.steps.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${index + 1}. ${step}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}