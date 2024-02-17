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
      sx={{ height: 420 }}
      image={image}
      planet={planet}
      title={title}
    />
    <CardContent>
      <DescriptionTypography>
       {planet}
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
        handleClose={handleCloseModal}
        />
    </ModalWindow>
    </>
  );
};

export default CardItem;
