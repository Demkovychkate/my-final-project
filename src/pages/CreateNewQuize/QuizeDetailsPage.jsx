import React, { useState } from 'react';
import { QuizDetailsWrapper } from './styled';
import NewQuizScorePage from './NewQuizScorePage';

const QuizeDetailsPage = ({ quize, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState(new Array(quize.questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[questionIndex] = optionIndex;
      return newSelectedOptions;
    });
  };

  const handleSubmit = () => {
    const newResults = quize.questions.map((question, index) => {
      const isCorrect = selectedOptions[index] === question.correctAnswer;
      return { isCorrect, questionIndex: index, correctAnswer: question.correctAnswer };
    });
    const correctAnswersCount = newResults.filter((result) => result.isCorrect).length;
    setCorrectAnswers(correctAnswersCount);
    setSubmitted(true);
    onSubmit(newResults);
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
        {submitted && <NewQuizScorePage quizData={quize} correctAnswers={correctAnswers} />}
      </QuizDetailsWrapper>
    </div>
  );
};

export default QuizeDetailsPage;
