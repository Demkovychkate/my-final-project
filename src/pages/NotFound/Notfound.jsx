import React from 'react';
import { NotFoundWrapper } from './styled';
import { NotFoundContent } from './styled';
import { FourZeroFourBg } from './styled';
import { Link404 } from './styled';

const NotFound = () => (
  <NotFoundWrapper>
    <NotFoundContent>
      <FourZeroFourBg>
        <h1>404</h1>
      </FourZeroFourBg>
      <div className="contant_box_404">
        <h3>Look like you are lost</h3>
        <p>The page you are looking for is not available!</p>
        <Link404 href="/">Go to Home</Link404>
      </div>
    </NotFoundContent>
  </NotFoundWrapper>
);

export default NotFound;
