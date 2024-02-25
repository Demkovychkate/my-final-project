import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styled';
import { QuizText } from './styled';

const Favorite = () => {
  const [favoriteQuizzes, setFavoriteQuizzes] = useState([]);

  useEffect(() => {   
    const storedFavoriteQuizzes = localStorage.getItem('favoriteQuizzes');
    if (storedFavoriteQuizzes) {
      setFavoriteQuizzes(JSON.parse(storedFavoriteQuizzes));
    }
  }, []);

  const removeFromFavorites = (id) => {   
    const updatedFavoriteQuizzes = favoriteQuizzes.filter((quiz) => quiz.id !== id);
    setFavoriteQuizzes(updatedFavoriteQuizzes);
    localStorage.setItem('favoriteQuizzes', JSON.stringify(updatedFavoriteQuizzes));
  };

  const addToFavorites = (quiz) => { 
    const updatedFavoriteQuizzes = [...favoriteQuizzes, quiz];
    setFavoriteQuizzes(updatedFavoriteQuizzes);
    localStorage.setItem('favoriteQuizzes', JSON.stringify(updatedFavoriteQuizzes));
  };

  return (
    <div>
      <QuizText>Favorite Quizzes</QuizText>
      {favoriteQuizzes.length === 0 ? (
        <QuizText>No favorite quizzes added yet</QuizText>
      ) : (
        <ul>
          {favoriteQuizzes.map((quiz) => (
            <li key={quiz.id}>
              <p>{quiz.planet}</p>
              <Button onClick={() => removeFromFavorites(quiz.id)}>Remove from Favorites</Button>         
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
