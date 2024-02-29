import React from 'react';
import { Button } from './styled';
import { QuizStartPageWrapper } from './styled';

const QuizStartPage = ({ planet, onStartQuiz }) => (
  <>
    <QuizStartPageWrapper>
      <h2>Do you really want to start Quiz?</h2>
    <Button onClick={onStartQuiz}>Start Quiz</Button>
    </QuizStartPageWrapper>

  </>
);

export default QuizStartPage;
