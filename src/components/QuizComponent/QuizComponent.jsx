import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import Timer from './Timer';
import ScorePage from './ScorePage';
import {
  QuizContainer, Header, QuizImage, Question,
} from './styled';

const QuizComponent = ({ planet }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0 || quizCompleted) {
          setTimerFinished(true);
          clearTimeout(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    if (currentQuestionIndex === planet.questions.length) {
      setQuizCompleted(true);
    }

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex, planet.questions.length, quizCompleted]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setTimeLeft(180);
    setScore(0);
    setQuizCompleted(false);
    setTimerFinished(false);
  };

  const handleClose = () => {
    setQuizCompleted(false);
  };

  const renderQuestion = () => {
    if (quizCompleted) {
      return (
        <ScorePage
          score={score}
          totalQuestions={planet.questions.length}
          onRestart={handleRestart}
          onClose={handleClose}
        />
      );
    } if (currentQuestionIndex < planet.questions.length) {
      const question = planet.questions[currentQuestionIndex];
      return <QuizQuestion question={question} onAnswer={handleAnswer} />;
    }
  };

  return (
    <QuizContainer>
      <Header>
        <Timer timeLeft={timeLeft} timerFinished={timerFinished} />
      </Header>
      <Question>{renderQuestion()}</Question>
    </QuizContainer>
  );
};

export default QuizComponent;
