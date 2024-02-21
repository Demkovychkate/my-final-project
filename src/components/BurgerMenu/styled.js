import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: #333;
    position: absolute;
    transition: all 0.3s ease;
    border-radius: 3px;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 8px;
    }

    &:nth-child(3) {
      top: 16px;
    }
  }

  ${({ isOpen }) =>
    isOpen
    && `
    div {
      &:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  `}

  @media (min-width: 769px) {
    display: none;
  }
`;
