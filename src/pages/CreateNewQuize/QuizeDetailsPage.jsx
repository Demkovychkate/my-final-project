import React, { useState } from 'react';
import { QuizDetailsWrapper } from './styled';

const QuizeDetailsPage = ({ quize, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(quize.questions.length).fill(null));

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[questionIndex] = optionIndex;
      return newSelectedOptions;
    });
  };

  const handleSubmit = () => {
    if (selectedOptions) {
      const isCorrect = selectedOptions.every((option, index) => option === quize.questions[index].correctOptionIndex);
      onSubmit(isCorrect);
      setSelectedOptions(Array(quize.questions.length).fill(null));
    } else {
      alert('Будь ласка, виберіть відповідь перед відправкою.');
    }
  };

  const renderQuestions = () => quize.questions.map((question, questionIndex) => (
    <li key={questionIndex}>
      <p>{question.text}</p>
      <ul>
        {question.options.map((option, optionIndex) => (
          <li key={optionIndex}>
            <label>
              <input
                type="radio"
                name={`question_${questionIndex}`}
                value={optionIndex}
                checked={selectedOptions[questionIndex] === optionIndex}
                onChange={() => handleOptionChange(questionIndex, optionIndex)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div>
      <QuizDetailsWrapper>
        <h1>{quize.name}</h1>
        <p>Description: {quize.description}</p>
        <h2>Questions:</h2>
        <ul>{renderQuestions()}</ul>
        <button onClick={handleSubmit}>Submit</button>
      </QuizDetailsWrapper>
    </div>
  );
};

export default QuizeDetailsPage;
