import React from 'react';
import { SideBarWrapper, Input, StyledLink } from './styled';

const MenuContent = ({ handleInputChange, isOpen, toggleMenu }) => (
  <SideBarWrapper>
    <Input placeholder='Search' onChange={handleInputChange} />
    <StyledLink to='/ouruniverse/favorite'>Favorite</StyledLink>
    <StyledLink to='/ouruniverse/new'>New Quiz</StyledLink>
  </SideBarWrapper>
);
export default MenuContent;
