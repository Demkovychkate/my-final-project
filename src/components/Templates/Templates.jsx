import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Planets from '../../pages/Planets/Planets';
import SparklesPreview from './styled';

const Templates = () => (
  < SparklesPreview >
    <Grid container >
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={2}>
      <SideBar />
    </Grid>
    <Grid item xs={10}>
      <Planets />
    </Grid>
  </Grid>
  </SparklesPreview>
);

export default Templates;
