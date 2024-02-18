import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  height: 100px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 400;
  color: white;
  z-index: 20;
  text-align: center;
  position: absolute;
  top:20%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 40px; 
  }
`;
