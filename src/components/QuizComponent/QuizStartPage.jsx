import React from 'react';
import { Button } from './styled';

const QuizStartPage = ({ planet, onStartQuiz }) => (
  <div>
    <h2>Do you really want to start Quiz</h2>
    <Button onClick={onStartQuiz}>Start Quiz</Button>
  </div>
);

export default QuizStartPage;
