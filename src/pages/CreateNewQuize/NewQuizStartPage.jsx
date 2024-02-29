import React from 'react';
import { ButtonWrapper } from '../../components/Card/styled';
import { QuizStartPageWrapper } from '../../components/QuizComponent/styled';

const NewQuizStartPage = ({ planet, onStartQuiz }) => (
  <>
    <QuizStartPageWrapper>
      <h2>Do you want to create your own Quiz</h2>
    <ButtonWrapper onClick={onStartQuiz}>Start to create</ButtonWrapper>
    </QuizStartPageWrapper>

  </>
);

export default NewQuizStartPage;
