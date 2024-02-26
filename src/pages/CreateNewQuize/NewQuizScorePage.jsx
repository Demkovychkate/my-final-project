import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';
import { ScoreWrapper } from './styled';

const NewQuizScorePage = ({
  score, totalQuestions, onRestart, onClose, addToFavorites,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleRestart = () => {
    if (typeof onRestart === 'function') {
      onRestart();
    }
  };

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div>
      <ScoreWrapper>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {totalQuestions}</p>
        <Button onClick={handleRestart}>Restart</Button>
        <Button onClick={handleClose}>Close</Button>
      </ScoreWrapper>
    </div>
  );
};

export default NewQuizScorePage;
