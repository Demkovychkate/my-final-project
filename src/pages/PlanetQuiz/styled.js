import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const QuizContainer = styled.div`
  margin-bottom: 20px;
`;

export const QuestionCount = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Question = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const OptionLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const OptionInput = styled.input`
  margin-right: 10px;
`;

export const NextButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const QuizCompleted = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Score = styled.p`
  font-size: 20px;
`;
