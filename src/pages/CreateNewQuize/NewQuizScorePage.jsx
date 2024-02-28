import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';
import { ScoreWrapper } from './styled';

const NewQuizScorePage = ({
  quizData, onRestart, onClose, correctAnswers,
}) => (
    <ScoreWrapper>
      <h1>Quiz Score</h1>
      <h2>{correctAnswers} / {quizData.questions.length}</h2>
      <button onClick={onRestart}>Restart</button>
      <Link to='/'>
        <Button>Close</Button>
      </Link>
    </ScoreWrapper>
);

export default NewQuizScorePage;
