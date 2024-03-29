import React, { useState, useEffect } from 'react';
import { QuizWrapper, QuizCardwrapper } from './styled';
import { ButtonWrapper } from '../../components/Card/styled';

const Favorite = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const hanleRemoveFromFavorites = (id) => {
    const newFavorites = favoriteCards.filter((card) => card.id !== id);
    setFavoriteCards(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteCards(storedFavorites);
  }, []);
  return (
    <QuizWrapper>
      <>
      <h2>Favorite Cards</h2>
      <ul>
        {favoriteCards.map((card, index) => (
          <li key={index}>
            <div>
            <QuizCardwrapper>
              <h3>{card.planet}</h3>
              <img src={card.image} alt={card.planet} />
              <p>{card.description}</p>
              <ButtonWrapper onClick={() => hanleRemoveFromFavorites(card.id)}>Remove Card from favorites</ButtonWrapper>
              </QuizCardwrapper>
              </div>
          </li>
        ))}
      </ul>
      </>
      </QuizWrapper>
  );
};

export default Favorite;
