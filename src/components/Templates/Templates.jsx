import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { TemplateWrapper } from './styled';

const Templates = () => (
  <TemplateWrapper>
    <Grid container >
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={1.5}>
      <SideBar />
    </Grid>
    <Grid item xs={10.5}>
      <Outlet />
      </Grid>
  </Grid>
  </TemplateWrapper>
);

export default Templates;
