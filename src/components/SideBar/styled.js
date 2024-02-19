// import styled from 'styled-components';

// export const SideBarWrapper = styled.div`
//   height: calc(100vh - 120px);
//   color: darkgray;
//   background-color: #f2f2f2;
//   width: ${(props) => (props.isOpen ? '100%' : '150px')};
//   overflow-x: hidden;
//   transition: width 0.3s ease;

//   @media (max-width: 768px) {
//     width: ${(props) => (props.isOpen ? '100%' : '0px')};
//   }
// `;

// export const BurgerMenuIcon = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   cursor: pointer;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;
// styled.js
import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  height: calc(100vh - 120px);
  background-color: #f2f2f2;
  width: ${(props) => (props.isOpen ? '100%' : '150px')}; 
  overflow-x: hidden;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? '100%' : '0px')}; 
  }
`;

export const BurgerMenuIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
