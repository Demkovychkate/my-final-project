import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { SideBarWrapper, BurgerMenuIcon } from './styled';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    <SideBarWrapper>
      <TextField
       fullWidth
       variant='outlined'
      label='Search Planet'
      placeholder='Search Planet'
      />
      <Link to='/ouruniverse/favorite'>Favorite</Link>
    </SideBarWrapper>;
  };

  return (
    <SideBarWrapper isOpen={isOpen}>
      <BurgerMenuIcon onClick={toggleSideBar}>&#9776;</BurgerMenuIcon>
      SideBar
    </SideBarWrapper>
  );
};

export default SideBar;
