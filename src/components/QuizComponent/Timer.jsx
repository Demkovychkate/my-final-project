import React from 'react';

const Timer = ({ timeLeft, timerFinished }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timerFinished) {
    return <div className="timer">Time is up!</div>;
  }

  return (
    <div className="timer">
      Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
