import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';
import { ScoreWrapper } from './styled';

const NewQuizScorePage = ({
  score, totalQuestions, onRestart, onClose, addToFavorites,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div>
     <ScoreWrapper>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <Link to='/'>
        <Button>Close</Button>
      </Link>
      </ScoreWrapper>
      </div>
  );
};

export default NewQuizScorePage;
