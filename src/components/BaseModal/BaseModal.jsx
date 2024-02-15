import React from 'react';
import { Typography } from '@mui/material';
import { DescriptionTypography } from '../Card/styled';

const BaseModal = ({ title, image, description }) => (
  <>
  <img
      src={image}
      title={title}
   />
      <Typography gutterBottom variant="h5" component="div">
       {title}
      </Typography>
      <DescriptionTypography variant="body2" color="text.secondary">
       {description}
      </DescriptionTypography>
  </>
);

export default BaseModal;