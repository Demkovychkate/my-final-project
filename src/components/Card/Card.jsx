// import { useState } from 'react';
// import { CardActions, CardContent, CardMedia } from '@mui/material';
// import React from 'react';
// import { CardWrapper, DescriptionTypography } from './styled';
// import ModalWindow from '../ModalWindow/ModalWindow';
// import BaseModal from '../BaseModal/BaseModal';
// import { ButtonWrapper } from './styled';

// const CardItem = ({
//   planet, image, description, title,
// }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   return (
//     <>
//     <CardWrapper>
//     <CardMedia
//       sx={{ height: 420 }}
//       image={image}
//       planet={planet}
//       title={title}
//     />
//     <CardContent>
//       <DescriptionTypography>
//        {planet}
//       </DescriptionTypography>
//     </CardContent>
//     <CardActions>
//       <ButtonWrapper size="small" onClick={handleOpenModal}>Learn More</ButtonWrapper>
//       <ButtonWrapper size="small">Start Quiz</ButtonWrapper>
//     </CardActions>
//   </CardWrapper>
//   <ModalWindow isOpen={openModal} handleClose={handleCloseModal}>
//      <BaseModal
//         planet={planet}
//         image={image}
//         description={description}
//         handleClose={handleCloseModal}
//         />
//     </ModalWindow>
//     </>
//   );
// };

// export default CardItem;

import { useState } from 'react';
import { CardActions, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { CardWrapper, DescriptionTypography } from './styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import BaseModal from '../BaseModal/BaseModal';
import { ButtonWrapper } from './styled';

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
          <ButtonWrapper size="small" onClick={handleOpenModal}>Learn More</ButtonWrapper>
          <ButtonWrapper size="small">Start Quiz</ButtonWrapper>
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
