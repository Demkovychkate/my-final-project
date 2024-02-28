import React, { useState } from 'react';
import { QuizDetailsWrapper } from './styled';
import NewQuizScorePage from './NewQuizScorePage';

const QuizeDetailsPage = ({ quize, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[questionIndex] = optionIndex;
      return newSelectedOptions;
    });
  };

  const handleSubmit = () => {
    if (selectedOptions.some((option) => option === undefined)) {
      alert('Please select an option for all questions before submitting.');
    } else {
      const newResults = quize.questions.map((question, index) => ({
        isCorrect: question.answer === selectedOptions[index],
        questionIndex: index,
      }));
      setResults(newResults);
      setSubmitted(true);
      onSubmit(newResults);
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
        {submitted && <NewQuizScorePage results={results} />}
      </QuizDetailsWrapper>
    </div>
  );
};

export default QuizeDetailsPage;
