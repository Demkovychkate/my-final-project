import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Typography } from './styled';

const BaseModal = ({ image, description, handleClose }) => (
  <div style={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
  }}>
    <Card sx={{ maxWidth: 500, background: 'none' }}>
      <CardActionArea onClick={handleClose}>
        <CardMedia
          component='img'
          height="350"
          width='100%'
          image={image}
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);

export default BaseModal;
