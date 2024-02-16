'use client';

import React from 'react';
import { SparklesCore } from '../ui/sparkles.tsx';
import { HeaderContainer, Title } from './styled';

const Header = () => (
<HeaderContainer>
    <SparklesCore
      background='transparent'
      minSize={0.4}
      maxSize={1}
      particleDensity={1200}
      style={{ width: '50%', height: '50%' }}
      particleColor='#FFFFFF'
    />
      <Title>Our Universe</Title>
    </HeaderContainer>
);

export default Header;
