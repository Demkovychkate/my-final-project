import styled from 'styled-components';

export const QuizContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 18px;
  margin-bottom: 20px;
`;
