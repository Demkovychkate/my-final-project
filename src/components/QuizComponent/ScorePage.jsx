import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';

const ScorePage = ({
  score, totalQuestions, onRestart, onClose, addToFavorites,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>Percentage: {percentage}%</p>
      <Button onClick={onRestart}>Restart</Button>
      <Link to='/'>
        <Button>Close</Button>
      </Link>
      </div>
  );
};

export default ScorePage;
