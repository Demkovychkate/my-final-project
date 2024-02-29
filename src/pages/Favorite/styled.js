import styled from 'styled-components';

export const QuizWrapper = styled.div` 
  margin: 0 auto; 
  margin-top: 20px;
  color: white;
  padding: 20px;
  margin-top: 1%;
  font-family: "Cinzel", serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;  
  text-align: center;
`;

export const QuizCardwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1%;
  font-family: "Cinzel", serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  border: 1px solid white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 white;
  width: 100%;
  margin: 40px auto;
  
   li {
    list-style: none;   
   }

    img {
      max-width: 100%;      
      border-radius: 10px;
    }
`;
