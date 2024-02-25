import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { NewQuizeWrapper, FirstQuestionWrapper } from './styled';
import QuizForm from './QuizForm';
import QuizeDetailsPage from './QuizeDetailsPage';
import Timer from '../../components/QuizComponent/Timer';
import NewQuizScorePage from './NewQuizScorePage';
import { Question } from '../../components/QuizComponent/styled';

const CreateNewQuize = () => {
  const [isQuizeCreated, setIsQuizeCreated] = useState(false);
  const [newQuizeData, setNewQuizeData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleCreateQuize = (newQuizeData) => {
    setNewQuizeData(newQuizeData);
    setIsQuizeCreated(true);
  };
  const handleClose = () => {
    setQuizCompleted(false);
  };
  const { quizeId } = useParams();
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

    if (currentQuestionIndex === (newQuizeData?.questions?.length || 0)) {
      setQuizCompleted(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestionIndex, newQuizeData, quizCompleted]);

  const renderQuestion = () => {
    if (quizCompleted) {
      return (
        <NewQuizScorePage
          score={newQuizeData?.questions?.length || 0}
          totalQuestions={newQuizeData?.questions?.length || 0}
          onClose={handleClose}
        />
      );
    }
    return (
        <QuizForm
          onCreateQuize={handleCreateQuize}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
    );
  };

  return (
    <NewQuizeWrapper>
      <FirstQuestionWrapper>
        <Timer timeLeft={timeLeft} timerFinished={timerFinished} />
        <h1>Create New Quize</h1>
        {isQuizeCreated ? (
          <QuizeDetailsPage newQuizeData={newQuizeData} />
        ) : (
          <QuizForm onCreateQuize={handleCreateQuize} setCurrentQuestionIndex={setCurrentQuestionIndex} />
        )}
        {quizCompleted && (
          <NewQuizScorePage
            score={newQuizeData?.questions?.length || 0}
            totalQuestions={newQuizeData?.questions?.length || 0}
            onClose={handleClose}
          />
        )}
      </FirstQuestionWrapper>
    </NewQuizeWrapper>
  );
};

export default CreateNewQuize;
