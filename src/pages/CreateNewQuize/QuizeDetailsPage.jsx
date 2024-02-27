import React from 'react';
import { QuizDetailsWrapper } from './styled';

const QuizeDetailsPage = ({ quize, onRestart, onClose }) => {
  const renderQuestions = () => quize.questions.map((question, questionIndex) => (
      <li key={questionIndex}>
        <p>{question.text}</p>
        <ul>
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <label>
                <input type="radio" name={`question_${questionIndex}`} value={option} />
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
        <button onClick={onRestart}>Restart</button>
        <button onClick={onClose}>Close</button>
      </QuizDetailsWrapper>
    </div>
  );
};

export default QuizeDetailsPage;
