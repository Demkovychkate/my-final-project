import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarWrapper = styled.div`
  padding-top: 20%;
  height: calc(100vh - 120px);
 color: white;
  width: 150px;   
  transition: width 0.3s ease;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 10px;
  border-radius: 20px;
  border: solid 2px white;
  outline: none;
  color: grey;
  opacity: 0.75;
  font-weight: bold;
  font-family: 'Sacramento', cursive;
  

  &::placeholder {
   padding: 10px;
   text-align: center;
   font-size: 20px;
   font-weight: bold;
   font-family: 'Sacramento', cursive;
   
  }
`;

export const StyledLink = styled(Link)`
  color: white; 
  text-decoration: none; 
  font-size: 35px;
  display: block; 
  margin: 20px; 
  font-weight: bold;

  &:hover {
    background: none;
    color: white;
    box-shadow: 0 0 5px white,
                0 0 25px white,
                0 0 50px white,
                0 0 200px white;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
