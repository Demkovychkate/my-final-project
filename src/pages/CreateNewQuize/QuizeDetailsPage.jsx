import { useParams } from 'react-router-dom';
import React from 'react';

const QuizeDetailsPage = ({ quizzes, quizeId, newQuizeData }) => {
  const quize = newQuizeData || quizzes.find((quize) => quize.id === quizeId);

  if (!quize) {
    return <div>Quize not found</div>;
  }

  return (
    <div>
      <h1>{quize.name}</h1>
      <p>Description: {quize.description}</p>
      <h2>Questions:</h2>
      <ul>
        {quize.questions.map((question, index) => (
          <li key={index}>
            <p>{question.text}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            <p>Correct answer: {question.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizeDetailsPage;
