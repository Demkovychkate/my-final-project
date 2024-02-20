import React from 'react';
import { Link } from 'react-router-dom';
import { SideBarWrapper, Input, StyledLink } from './styled';

const SideBar = () => (
    <SideBarWrapper>
   <Input placeholder="Search" />
   <StyledLink to='/ouruniverse/favorite'>Favorite</StyledLink>
   </SideBarWrapper>
);
export default SideBar;
