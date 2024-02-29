import styled from 'styled-components';

export const NewQuizeWrapper = styled.div`
  color: white;
  margin: 20px auto;
`;

export const FirstQuestionWrapper = styled.div`
  margin: 20px auto;
  padding: 20px;
  background-color: #000;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #fff;

  h1 {
    color: #fff;
  }
`;

export const ScoreWrapper = styled.div`
  margin: 20px auto;
  padding: 20px;
  background-color: none;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #fff;
  color: white;
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;

   a {
    text-decoration: none;
   }

`;

export const QuizDetailsWrapper = styled.div`
  margin: 20px auto;
  padding: 20px;
  background-color: none;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #fff;
  color: white;
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  
  input {
    max-width: 80%;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid white;
  } 
  ::placeholder {
    color: black;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Cinzel', serif;
    text-align: center;
  }

  li {
    list-style: none;
  }

`;

export const QuizFormWrapper = styled.div`
  margin: 40px auto;
  padding: 20px;
  background-color: none;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #fff;
  color: white;
  text-align: center;
  font-family: 'Cinzel', serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
    input {
      max-width: 80%;
      margin: 10px;    
      padding: 10px;
      border-radius: 10px;
      border: 1px solid white;     

    }
    ::placeholder {
      color: black;
      font-size: 15px;
      font-weight: 400;
      font-style: normal;
      font-family: 'Cinzel', serif;
      text-align: center;

    }
      li {
        list-style: none;   
      }
      select {
        max-width: 80%;
        margin: 10px;    
        padding: 10px;
        border-radius: 10px;
        border: 1px solid white;     
      }  
        ::placeholder {
          color: black;
          font-size: 15px;
          font-weight: 400;
          font-style: normal;
          font-family: 'Cinzel', serif;
          text-align: center;
        } 

        :: option {
          color: black;
          font-size: 15px;
          font-weight: 400;
          font-style: normal;
          font-family: 'Cinzel', serif;
          text-align: center;
        }
`;
