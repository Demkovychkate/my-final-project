import { React, useState } from 'react';
import {
  SideBarWrapper, Input, StyledLink, BurgerMenuIcon,
} from './styled';

const SideBar = ({ handleInputChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <SideBarWrapper isOpen={isOpen}>
      <Input placeholder="Search" onChange={handleInputChange} />
    <StyledLink to='/ouruniverse/favorite'>Favorite</StyledLink>
    <StyledLink to='/ouruniverse/new'>New Quiz</StyledLink>
    <BurgerMenuIcon onClick={toggleSideBar}>&#9776;</BurgerMenuIcon>
    </SideBarWrapper>
    </>
  );
};

export default SideBar;
