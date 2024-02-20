import { CardMedia } from '@mui/material';
import { useState, useNavigate } from 'react';
import React from 'react';
import { CardActions, CardContent } from '@mui/material';
import { CardWrapper, DescriptionTypography } from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import BaseModal from '../BaseModal/BaseModal';
import { ButtonWrapper } from './styled';

const CardItem = ({
  id, planet, image, description, title,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleGoToQuiz = (id) => navigate(`/planet/${id}`);

  return (
    <>
      <CardWrapper>
        <CardMedia
          sx={{
            height: '420px',
            '@media (max-width: 960px)': {
              height: '320px',
            },
            '@media (max-width: 600px)': {
              height: '220px',
            },
          }}
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
          <ButtonWrapper size="small" onClick={handleOpenModal}>Learn More</ButtonWrapper>
          <ButtonWrapper size="small" onClick={handleGoToQuiz}>Start Quiz</ButtonWrapper>
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
