import React, { useState } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./DisplayRecipe.css";
import icon_heart_black from "../../img/icon_heart_black.png";

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
  };

  return (
    <div id="display_recipe_wrapper" onClick={handleOpen}>
      <button id="save_to_favourite_recipes">
        <img src={icon_heart_black} alt="save to favourites" />
      </button>
      <img src={img} alt="" />
      <div id="display_recipe_footer">
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
        <Box sx={style} onClick={(event) => event.stopPropagation()}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}