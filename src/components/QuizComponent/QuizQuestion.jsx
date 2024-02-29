import React, { useState } from 'react';
import { QuizQuestionWrapper } from './styled';
import { Button } from './styled';

const QuizQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const isCorrect = selectedOption === question.answer;
      onAnswer(isCorrect);
      setSelectedOption('');
    } else {
      setErrorMessage('Please select an option before you give an answer');
    }
  };

  return (
    < >
      <QuizQuestionWrapper>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={option}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
      <Button onClick={handleSubmit}>Answer</Button>
      {errorMessage && <p>{errorMessage}</p>}
    </QuizQuestionWrapper>
    </>
  );
};

export default QuizQuestion;
