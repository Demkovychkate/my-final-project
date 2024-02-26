import React, { useState } from 'react';
import { QuizDetailsWrapper } from './styled';

const QuizeDetailsPage = ({ quize, handleSubmitQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: optionIndex,
    });
  };

  const isOptionSelected = (questionIndex, optionIndex) => {
    return selectedOptions[questionIndex] === optionIndex;
  };

  function renderOptions(question, questionIndex) {
    return question.options.map((option, optionIndex) => (
      <li key={optionIndex}>
        <label>
          <input
            type="radio"
            name={`question_${questionIndex}`}
            value={optionIndex}
            checked={isOptionSelected(questionIndex, optionIndex)}
            onChange={() => handleOptionChange(questionIndex, optionIndex)} />
          {option}
        </label>
      </li>
    ));
  }

  const renderQuestions = () => {
    return quize.questions.map((question, index) => (
      <li key={index}>
        <p>{question.text}</p>
        <ul>{renderOptions(question, index)}</ul>
        <button onClick={() => handleSubmitQuestion(question)}>Submit Answer</button>
      </li>
    ));
  };

  if (!quize || !Array.isArray(quize.questions)) {
    return <div>Quiz data is invalid</div>;
  }

  return (
    <div>
      <QuizDetailsWrapper>
        <h1>{quize.name}</h1>
        <p>Description: {quize.description}</p>
        <h2>Questions:</h2>
        <ul>{renderQuestions()}</ul>
      </QuizDetailsWrapper>
    </div>
  );
};

export default QuizeDetailsPage;
