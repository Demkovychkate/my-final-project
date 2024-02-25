import React, { useState } from 'react';
import { Button } from './styled';

const QuizForm = ({ onCreateQuize, setCurrentQuestionIndex }) => {
  const [quizeName, setQuizeName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [quizeDescription, setQuizeDescription] = useState('');

  const handleInputChange = (e, questionIndex, optionIndex) => {
    const { name, value } = e.target;
    if (name === 'questionText') {
      setQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].text = value;
        return updatedQuestions;
      });
    } else if (name === 'option') {
      setQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        return updatedQuestions;
      });
    } else if (name === 'correctAnswer') {
      setQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].correctAnswer = value;
        return updatedQuestions;
      });
    } else if (name === 'quizeName') {
      setQuizeName(value);
    } else if (name === 'quizeDescription') {
      setQuizeDescription(value);
    }
  };

  const handleAddQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Update current question index
    setQuestions((prevQuestions) => [...prevQuestions, { text: '', options: [], correctAnswer: '' }]);
  };

  const handleAddOption = (questionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options.push('');
      return updatedQuestions;
    });
  };

  const handleCreateQuize = () => {
    if (!quizeName || !questions.length || !quizeDescription) {
      alert('Please fill in all required fields');
      return;
    }
    if (questions.some((question) => !question.correctAnswer)) {
      alert('Please specify correct answers for all questions');
      return;
    }
    onCreateQuize({
      name: quizeName,
      questions: questions.map((question) => ({
        text: question.text,
        options: question.options,
        correctAnswer: question.correctAnswer,
      })),
      description: quizeDescription,
    });
    setQuizeName('');
    setQuestions([]);
    setQuizeDescription('');
    alert('Quize created successfully!');
  };

  return (
    <>
      <input name="quizeName" type="text" value={quizeName} onChange={handleInputChange} placeholder="Enter Quize Name" />
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <input name="questionText" type="text" value={question.text} onChange={(e) => handleInputChange(e, questionIndex)} placeholder="Enter question" />
          {question.options.map((option, optionIndex) => (
            <input key={optionIndex} name="option" type="text" value={option} onChange={(e) => handleInputChange(e, questionIndex, optionIndex)} placeholder={`Enter option ${optionIndex + 1}`} />
          ))}
          <input name="correctAnswer" type="text" value={question.correctAnswer} onChange={(e) => handleInputChange(e, questionIndex)} placeholder="Enter correct answer" />
          <Button onClick={() => handleAddOption(questionIndex)}>Add Option</Button>
        </div>
      ))}
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <input name="quizeDescription" type="text" value={quizeDescription} onChange={handleInputChange} placeholder="Enter Quize Description" />
      <Button onClick={handleCreateQuize}>Create Quize</Button>
    </>
  );
};

export default QuizForm;
