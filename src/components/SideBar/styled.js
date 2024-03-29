import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarWrapper = styled.div`
  height: calc(100vh - 120px);
  color: white;
  width: ${(props) => (props.isOpen ? '100%' : '200px')}; 
  overflow-x: hidden;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? '100%' : '0px')}; 
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 10px;
  border-radius: 20px;
  border: solid 2px white;
  outline: none;
  color: grey;
  opacity: 0.75;
  font-weight: bold;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  &::placeholder {
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-family: "Cinzel", serif;
  }

  @media (max-width: 1100px) {
    width: 50%; 
  }
  
  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? '50%' : '150px')}; 
    position: ${(props) => (props.isOpen ? 'static' : 'absolute')};
    top: ${(props) => (props.isOpen ? 'auto' : '0')};
    left: ${(props) => (props.isOpen ? 'auto' : '0')};
  }
`;

export const StyledLink = styled(Link)`
  color: white;   
  text-decoration: none; 
  font-size: 25px;
  display: block; 
  margin: 20px; 
  font-weight: bold;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  &:hover {
    background: none;
    color: white;
    box-shadow: 0 0 5px white,
                0 0 25px white,
                0 0 50px white,
                0 0 200px white;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export const BurgerMenuIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;

  }
`;
