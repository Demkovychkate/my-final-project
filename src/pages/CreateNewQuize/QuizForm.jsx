import React, { useState } from 'react';
import { Button } from './styled';

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

  return (
    <>
      <input
        name='quizeName'
        type='text'
        value={quizeName}
        onChange={handleInputChange}
        placeholder='Enter Quiz Name'
      />
      <input
        name='quizeDescription'
        type='text'
        value={quizeDescription}
        onChange={handleInputChange}
        placeholder='Enter Quiz Description'
      />
      <h2>Questions:</h2>
      <Button
        onClick={() => setQuestions([...questions, { text: '', options: [] }])}
      >
        Add Question
      </Button>
      {questions.map((question, index) => (
        <div key={index}>
          <input
            type='text'
            value={question.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].text = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder='Enter Question'
          />
          <Button
            onClick={() => {
              const newQuestions = [...questions];
              newQuestions[index].options.push('');
              setQuestions(newQuestions);
            }}
          >
            Add Option
          </Button>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type='text'
                  value={option}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].options[optionIndex] = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  placeholder='Enter Option'
                />
              </li>
            ))}
          </ul>
          <h2>Правильна відповідь</h2>
          <input
            type='text'
            value={question.correctAnswer}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].correctAnswer = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder='Введіть правильну відповідь'
          />
          <Button
            onClick={() => {
              const correctAnswer = questions[index].correctAnswer;
              const newQuestions = [...questions];
              newQuestions[index].options.push(correctAnswer);
              newQuestions[index].correctOptionIndex = newQuestions[index].options.length - 1;
              setQuestions(newQuestions);
            }}
          >
            Додати правильну відповідь
          </Button>
        </div>
      ))}
      <Button onClick={handleSubmit}>Create Quiz</Button>
    </>
  );
};

export default QuizForm;
