import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Planets from '../../pages/Planets';

const Templates = () => (
    <Grid container >
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={3}>
      <SideBar />
    </Grid>
    <Grid item xs={9}>
      <Planets />
    </Grid>
  </Grid>
);

export default Templates;
