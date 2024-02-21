import React, { useState } from 'react';
import MenuContent from '../MenuContent/MenuContent';
import { Container, BurgerIcon } from './styled';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <BurgerIcon isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      {isOpen && <MenuContent isOpen={isOpen} toggleMenu={toggleMenu} />}
    </Container>
  );
};

export default BurgerMenu;
