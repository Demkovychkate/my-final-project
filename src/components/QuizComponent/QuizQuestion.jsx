import React, { useState } from 'react';

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
      setErrorMessage('Please select an option before submitting.');
    }
  };

  return (
    <div>
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
      <button onClick={handleSubmit}>Submit</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default QuizQuestion;
