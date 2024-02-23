import React from 'react';

const ScorePage = ({ score, totalQuestions }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>Percentage: {percentage}%</p>
      <button>Close</button>
      <button>Restart</button>
      </div>
  );
};

export default ScorePage;
