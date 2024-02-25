import React, { useEffect, useState } from 'react';
import { CardMedia, CardActions, CardContent } from '@mui/material';
import { CardWrapper, DescriptionTypography } from '../../components/Card/styled';
import { ButtonWrapper } from '../../components/Card/styled';
import CardItem from '../../components/Card/Card';

const Favorite = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const storedFavoriteCards = localStorage.getItem('favoriteCards');
    if (storedFavoriteCards) {
      setFavoriteCards(JSON.parse(storedFavoriteCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));
  }, [favoriteCards]);

  const addToFavorites = (newFavorite) => {
    setFavoriteCards((prevFavoriteCards) => [...prevFavoriteCards, newFavorite]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteCards((prevFavorites) => prevFavorites.filter((card) => card.id !== id));
  };

  return (
    <div>
      <h2>Favorite Cards</h2>
      <ul>
        {favoriteCards.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            planet={card.planet}
            image={card.image}
            description={card.description}
            title={card.title}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
