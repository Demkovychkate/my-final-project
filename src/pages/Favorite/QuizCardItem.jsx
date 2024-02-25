import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardMedia, CardContent, CardActions } from '@mui/material';
import BaseModal from '../../components/BaseModal/BaseModal';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { CardWrapper, DescriptionTypography } from '../../components/Card/styled';
import { ButtonWrapper } from '../../components/Card/styled';
import { QuizContext } from '../../components/QuizComponent/QuizContext';

const QuizCardItem = ({
  planet, image, description, title,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { addToFavorites } = useContext(QuizContext); // отримання функції addToFavorites з контексту

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddToFavorites = () => {
    addToFavorites(planet); // додано виклик функції addToFavorites з поточною вікториною
    navigate(`ouruniverse/favorite${planet}`); // перехід на сторінку Favorite
  };

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
      <ButtonWrapper size="small" onClick={handleAddToFavorites}>Add to Favorites</ButtonWrapper>
    </>
  );
};

export default QuizCardItem;
