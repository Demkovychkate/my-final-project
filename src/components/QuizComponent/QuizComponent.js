import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import Timer from './Timer';
import {
  QuizContainer, Header, QuizImage, QuestionCounter, Question,
} from './styled';
import './styled';

const QuizComponent = ({ planet }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      // Handle time's up
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    const question = planet.questions[currentQuestionIndex];
    return <QuizQuestion question={question} onAnswer={handleAnswer} />;
  };

  return (
    <QuizContainer>
      <Header>
        <QuizImage src={`path/to/${planet.image}.jpg`} alt={planet.planet} />
        <Timer timeLeft={timeLeft} />
        <QuestionCounter>{currentQuestionIndex + 1}/{planet.questions.length}</QuestionCounter>
      </Header>
      <Question>{renderQuestion()}</Question>
      {/* include other components score page here */}
    </QuizContainer>
  );
};

export default QuizComponent;
