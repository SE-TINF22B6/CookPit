import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./DisplayRecipe.css";
import jsPDF from "jspdf";
//import from favcourite button --> future feature
import icon_heart_black from "../../img/icon_heart_black.png";
import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

type DisplayRecipeProps = {
  id_author: number;
  img: string;
  title: string;
  rating: number;
  time: string;
  description: string;
  creation_date: string;
  ingredients: string;
  steps: string;
};

export default function DisplayRecipe({
  img,
  title,
  rating,
  time,
  creation_date,
  description,
  ingredients,
  steps,
}: DisplayRecipeProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const [localIngredients, setLocalIngredients] = useState<string[]>([]);
  useEffect(() => {
    try {
      const parsedIngredients = JSON.parse(ingredients);
      if (Array.isArray(parsedIngredients)) {
        setLocalIngredients(parsedIngredients);
      } else {
        console.error("Parsed ingredients is not an array");
      }
    } catch (error) {
      console.error("Failed to parse ingredients:", error);
    }
  }, [ingredients]);

  const [localSteps, setLocalSteps] = useState<string[]>([]);
  useEffect(() => {
    try {
      const parsedSteps = JSON.parse(steps);
      if (Array.isArray(parsedSteps)) {
        setLocalSteps(parsedSteps);
      } else {
        console.error("Parsed ingredients is not an array");
      }
    } catch (error) {
      console.error("Failed to parse ingredients:", error);
    }
  }, [ingredients]);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll" as "scroll",
    maxHeight: "90vh",
  };

  const handleDownload = (downloadImg: string) => {
    const doc = new jsPDF();
    const maxWidth = 160;
    const ingredientsText = localIngredients.join("\n");
    const stepsText = localSteps
      .map((step, index) => `${index + 1}. ${step}`)
      .join("\n");
    const text = `Ingredients:\n${ingredientsText}\n\nSteps:\n${stepsText}`;
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.text(splitText, 10, 10);

    const imgData = downloadImg;
    const img = new Image();
    img.src = imgData;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const maxWidth = 100;
      const maxHeight = 100;
      let width = maxWidth;
      let height = maxHeight;
      if (aspectRatio > 1) {
        height = maxWidth / aspectRatio;
      } else {
        width = maxHeight * aspectRatio;
      }
      const x = 10;
      const y = 50;
      doc.addImage(img, "JPEG", x, y, width, height);
      doc.save(`${title}.pdf`);
    };
  };

  return (
    <div id="display_recipe_wrapper">
      {/* future feature --> save recieps as favourites --> out of scope for software engineering project */}
      {/* <button id="save_to_favourite_recipes">
        <img src={icon_heart_black} alt="save to favourites" />
      </button> */}
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
        <Box
          className="modalBox"
          sx={style}
          onClick={(event) => event.stopPropagation()}
        >
          <IconButton
            aria-label="download"
            onClick={() => handleDownload(img)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>
          </IconButton>
          <Card sx={{ maxWidth: 800, margin: "auto", mt: 1 }}>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                {title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Rating value={rating} precision={0.5} readOnly />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1 }}
                >
                  {rating} stars
                </Typography>
              </Box>
              <CardMedia component="img" height="400" image={img} alt={title} />
              <Typography variant="body1" color="text.secondary" paragraph>
                {description}
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Zeit: {time} min
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Veröffentlichung: {creation_date}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" component="div" gutterBottom>
                Zutaten
              </Typography>
              <List>
                {localIngredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" component="div" gutterBottom>
                Anleitung
              </Typography>
              <List>
                {localSteps.map((step, index) => (
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
