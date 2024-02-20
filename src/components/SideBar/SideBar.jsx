import React from 'react';
import { SideBarWrapper, Input, StyledLink } from './styled';

const SideBar = () => (
    <SideBarWrapper>
   <Input placeholder="Search" />
   <StyledLink to='/ouruniverse/favorite'>Favorite</StyledLink>
   <StyledLink to='/ouruniverse/new'>New Quiz</StyledLink>
   </SideBarWrapper>
);
export default SideBar;
