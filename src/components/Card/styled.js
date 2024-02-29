import styled from 'styled-components';

export const CardWrapper = styled.div`  
  width: 160px;
  margin-top: 1.5%;
  margin-right: 5px;
  position: relative;
  `;

export const DescriptionTypography = styled.div`
max-height: 70px;
overflow: hidden;
text-overflow: ellipsis;
font-family: "Cinzel", serif;
font-optical-sizing: auto;
font-weight: 600;
font-style: normal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 25px;
`;

export const ButtonWrapper = styled.div`
  padding: 5px;
  font-size: 15px;
  background-color: none;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
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
`;
export const FavorireButton = styled.div`
position: absolute;
top: 0px;
right: 0px;
padding: 5px;
font-size: 15px;
color: white;
border: none;
background-color: none;
border-radius: 5px;
overflow: hidden;
transition: 0.5s;
cursor: pointer;

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
