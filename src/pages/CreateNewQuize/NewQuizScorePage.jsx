import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonWrapper } from '../../components/Card/styled';
import { ScoreWrapper } from './styled';

const NewQuizScorePage = ({
  quizData, onRestart, onClose, correctAnswers,
}) => (
    <ScoreWrapper>
      <h1>Quiz Score</h1>
      <h2>{correctAnswers} / {quizData.questions.length}</h2>
      <ButtonWrapper onClick={onRestart}>Restart</ButtonWrapper>
      <Link to='/'>
        <ButtonWrapper>Close</ButtonWrapper>
      </Link>
    </ScoreWrapper>
);

export default NewQuizScorePage;
