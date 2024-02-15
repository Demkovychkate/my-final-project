import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Planets from '../../pages/Planets/Planets';
import { SparklesPreview } from '../SparklesPreview/SparklesPreview';

const Templates = () => (
    <Grid container >
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={2}>
      <SideBar />
    </Grid>
    <Grid item xs={10}>
      <SparklesPreview>
         <Planets />
      </SparklesPreview>      
    </Grid>
  </Grid>
);

export default Templates;
