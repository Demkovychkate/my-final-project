import React, { useState, useEffect } from 'react';
import QuizForm from './QuizForm';
import QuizeDetailsPage from './QuizeDetailsPage';
import QuizStartPage from '../../components/QuizComponent/QuizStartPage';
import { NewQuizeWrapper } from './styled';
import Timer from '../../components/QuizComponent/Timer';
import ScorePage from '../../components/QuizComponent/ScorePage';

const CreateNewQuize = ({ handleQuizData }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState({ name: '', questions: [], description: '' });
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (quizStarted && timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      } else if (timeLeft === 0) {
        setTimerFinished(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [quizStarted, timeLeft]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleCreateQuize = (data) => {
    setQuizData(data);
    // Перенесемо встановлення quizStarted на true сюди, після отримання даних з форми вікторини
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setQuizData({ name: '', questions: [], description: '' });
    setQuizStarted(false);
    setTimeLeft(300);
    setTimerFinished(false);
  };

  const handleClose = () => {
    setQuizStarted(false);
    setTimeLeft(300);
    setTimerFinished(false);
  };

  const renderContent = () => {
    if (!quizStarted) {
      return <QuizStartPage onStartQuiz={handleStartQuiz} />;
    } if (quizData.questions.length === 0) {
      return <QuizForm onCreateQuize={handleCreateQuize} />;
    } return (
        <QuizeDetailsPage
          quize={quizData}
          onRestart={handleRestart}
          onClose={handleClose}
        />
    );
  };

  return (
    <NewQuizeWrapper>
      {quizStarted && <Timer timeLeft={timeLeft} timerFinished={timerFinished} />}
      {renderContent()}
    </NewQuizeWrapper>
  );
};

export default CreateNewQuize;
