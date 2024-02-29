import styled from 'styled-components';

export const QuizContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  background-image: url("https://www.ferra.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2022/04/26/09/5379300/4f0b46449baa5eaca9c087cae706fdffc217b472.jpg");
  background-size: cover;
  text-align: center;
  background-repeat: no-repeat;
  color: white; 
  margin-top: 10%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const QuizImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const QuestionCounter = styled.div`
  font-size: 16px;
`;

export const Question = styled.div`  
  margin-bottom: 20px;
  font-family: "Cinzel", serif;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
`;
export const Button = styled.button`
padding: 5px;
font-size: 15px;
background-color: none;
color: black;
border: none;
border-radius: 5px;
letter-spacing: 4px;
overflow: hidden;
transition: 0.5s;
cursor: pointer;
font-family: "Cinzel", serif;
font-optical-sizing: auto;
font-weight: 600;
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

export const QuizStartPageWrapper = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  height: 100vh;   
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
`;

export const QuizQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1%;
  font-family: "Cinzel", serif;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  
   li {
    list-style: none;
    margin-bottom: 10px;
`;
