import React, { useState } from 'react';
import { ButtonWrapper } from '../../components/Card/styled';
import { QuizFormWrapper } from './styled';

const QuizForm = ({ onCreateQuize }) => {
  const [quizeName, setQuizeName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizeDescription, setQuizeDescription] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'quizeName') {
      setQuizeName(value);
    } else if (name === 'quizeDescription') {
      setQuizeDescription(value);
    }
  };

  const handleSubmit = () => {
    if (!quizeName || !quizeDescription || questions.length === 0) {
      alert('Please fill in all required fields');
      return;
    }
    onCreateQuize({
      name: quizeName,
      questions: questions,
      description: quizeDescription,
    });
    setQuizeName('');
    setQuestions([]);
    setQuizeDescription('');
    alert('Quiz created successfully!');
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: [] }]);
  };

  const handleAddOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push('');
    setQuestions(newQuestions);
  };

  const handleSetCorrectAnswer = (index, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = optionIndex;
    setQuestions(newQuestions);
  };

  return (
    <>
      <QuizFormWrapper>
      <h2>Create New Quiz</h2>
      <input name="quizeName" type="text" value={quizeName} onChange={handleInputChange} placeholder="Enter Quiz Name" />
      <input name="quizeDescription" type="text" value={quizeDescription} onChange={handleInputChange} placeholder="Enter Quiz Description" />
      <h2>Questions:</h2>
      <ButtonWrapper onClick={handleAddQuestion}>Add Question</ButtonWrapper>
      {questions.map((question, index) => (
        <div key={index}>
          <input
            type="text"
            value={question.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].text = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder="Enter Question"
          />
          <ButtonWrapper onClick={() => handleAddOption(index)}>Add Option</ButtonWrapper>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].options[optionIndex] = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  placeholder="Enter Option"
                />
              </li>
            ))}
          </ul>
          <h2>Correct answer</h2>
          <select value={question.correctAnswer} onChange={(e) => handleSetCorrectAnswer(index, e.target.value)}>
            <option value="">Select correct answer</option>
            {question.options.map((option, optionIndex) => (
              <option key={optionIndex} value={optionIndex}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <ButtonWrapper onClick={handleSubmit}>Create New Quiz</ButtonWrapper>
      </QuizFormWrapper>
    </>
  );
};

export default QuizForm;
