import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import Timer from './Timer';
import ScorePage from './ScorePage';
import {
  QuizContainer, Header, QuizImage, QuestionCounter, Question,
} from './styled';
import './styled';

const QuizComponent = ({ planet }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      alert('Time is up!');
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setTimeLeft(300);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleClose = () => {
    setQuizCompleted(false);
  };

  const renderQuestion = () => {
    if (currentQuestionIndex < planet.questions.length) {
      const question = planet.questions[currentQuestionIndex];
      return <QuizQuestion question={question} onAnswer={handleAnswer} />;
    }
    return (
        <ScorePage
          score={score}
          totalQuestions={planet.questions.length}
          onRestart={handleRestart}
          onClose={handleClose}
        />
    );
  };

  return (
    <QuizContainer>
      <Header>
        <QuizImage src={`path/to/${planet.image}.jpg`} alt={planet.planet} />
        <Timer timeLeft={timeLeft} />
        <QuestionCounter>{currentQuestionIndex + 1}/{planet.questions.length}</QuestionCounter>
      </Header>
      <Question>{renderQuestion()}</Question>
      {quizCompleted && (
        <div>
          <button onClick={handleRestart}>Restart</button>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </QuizContainer>
  );
};

export default QuizComponent;
