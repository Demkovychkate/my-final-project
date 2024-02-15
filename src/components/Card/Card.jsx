import { useState } from 'react';
import {
  CardActions, CardContent, CardMedia, Button, Typography, Modal,
} from '@mui/material';
import React from 'react';
import { CardWrapper, DescriptionTypography } from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import BaseModal from '../BaseModal/BaseModal';

const CardItem = ({
  planet, image, description, title,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
    <CardWrapper>
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      planet={planet}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {planet}
      </Typography>
      <DescriptionTypography variant="body2" color="text.secondary">
       {title}
      </DescriptionTypography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleOpenModal}>Learn More</Button>
      <Button size="small">Start Quiz</Button>
    </CardActions>
  </CardWrapper>
  <ModalWindow isOpen={openModal} handleClose={handleCloseModal}>
     <BaseModal
        planet={planet}
        image={image}
        description={description}
        />
    </ModalWindow>
    </>
  );
};

export default CardItem;
