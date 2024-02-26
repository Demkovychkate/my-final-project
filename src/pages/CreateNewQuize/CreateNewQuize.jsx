import React, { useState } from 'react';
import QuizForm from './QuizForm';
import QuizeDetailsPage from './QuizeDetailsPage';
import QuizStartPage from '../../components/QuizComponent/QuizStartPage';
import { NewQuizeWrapper } from './styled';

const CreateNewQuize = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [quizeName, setQuizeName] = useState('');
  const [quizeDescription, setQuizeDescription] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleCreateQuize = (newQuestions, name, description) => {
    setQuestions(newQuestions);
    setQuizeName(name);
    setQuizeDescription(description);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(true);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitQuestion = () => {
    if (selectedOption !== null) {
      const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
      handleAnswer(isCorrect);
      setSelectedOption(null);
    } else {
      alert('Please select an option before submitting.');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizStarted(false);
  };

  const handleClose = () => {
    setQuizStarted(false);
  };

  const renderContent = () => {
    if (!quizStarted) {
      return <QuizStartPage onStartQuiz={handleStartQuiz} />;
    } if (questions.length === 0) {
      return (
        <QuizForm
          onCreateQuize={handleCreateQuize}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      );
    } if (currentQuestionIndex < questions.length) {
      return (
        <QuizForm
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          onOptionChange={handleOptionChange}
        />
      );
    } return (
      <QuizeDetailsPage
        quize={{
          name: quizeName,
          description: quizeDescription,
          questions: questions,
        }}
        score={score}
        onRestart={handleRestart}
        onClose={handleClose}
        handleSubmitQuestion={handleSubmitQuestion}
      />
    );
  };

  return (
    <NewQuizeWrapper>
      {renderContent()}
    </NewQuizeWrapper>
  );
};

export default CreateNewQuize;
