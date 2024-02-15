import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Planets from '../../pages/Planets/Planets';

const Templates = () => (
    <Grid container >
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={1.5}>
      <SideBar />
    </Grid>
    <Grid item xs={10.5}>
      <Planets />
    </Grid>
  </Grid>
);

export default Templates;
