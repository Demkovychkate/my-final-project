import React from 'react';
import MenuContent from '../MenuContent/MenuContent';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const SideBar = ({ handleInputChange }) => (
  <>
    <MenuContent handleInputChange={handleInputChange} />
    <BurgerMenu />
  </>
);
export default SideBar;
