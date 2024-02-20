'use client';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SparklesCore } from '../ui/sparkles.tsx';
import { HeaderContainer, Title } from './styled';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Title onClick={handleClick}>Our Universe</Title>
      <SparklesCore
        background='transparent'
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        style={{ width: '50%', height: '50%' }}
        particleColor='#FFFFFF'
      />
    </HeaderContainer>
  );
};

export default Header;
