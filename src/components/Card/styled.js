import styled from 'styled-components';

export const CardWrapper = styled.div`  
  width: 160px;
  margin-top: 1.5%;
  margin-right: 5px;
  `;

export const DescriptionTypography = styled.div`
max-height: 70px;
overflow: hidden;
text-overflow: ellipsis;
font-family: "Sacramento", cursive;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
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
  font-family: "Raleway", sans-serif;

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
