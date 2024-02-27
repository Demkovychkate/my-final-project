import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';
import { ScoreWrapper } from './styled';

const NewQuizScorePage = ({ quizData, onRestart, onClose }) => {
  const correctAnswers = quizData.questions.reduce((acc, question) => acc + question.options.filter((option) => option.isCorrect).length, 0);
  return (
    <ScoreWrapper>
      <h1>Quiz Score</h1>
      <h2>{correctAnswers} / {quizData.questions.length}</h2>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onClose}>Close</button>
    </ScoreWrapper>
  );
};

export default NewQuizScorePage;
