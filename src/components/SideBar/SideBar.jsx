import React, { useState } from 'react';
import { SideBarWrapper, BurgerMenuIcon } from './styled';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideBarWrapper isOpen={isOpen}>
      <BurgerMenuIcon onClick={toggleSideBar}>&#9776;</BurgerMenuIcon>
      SideBar
    </SideBarWrapper>
  );
};

export default SideBar;
