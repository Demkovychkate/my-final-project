// import React from 'react';
// import { SideBarWrapper } from './styled';

// const SideBar = () => (
// <SideBarWrapper>SideBar</SideBarWrapper>
// );

// export default SideBar;

import React, { useState } from 'react';
import { SideBarWrapper, BurgerMenuIcon } from './styled'; // Додали BurgerMenuIcon

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Створили стан для відкриття/закриття сайдбару

  // Функція для відкриття/закриття сайдбару
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideBarWrapper isOpen={isOpen}> {/* Передали isOpen як пропс */}
      <BurgerMenuIcon onClick={toggleSideBar}>&#9776;</BurgerMenuIcon> {/* Додали іконку бургер-меню, яка викликає функцію toggleSideBar */}
      SideBar
    </SideBarWrapper>
  );
};

export default SideBar;
