// import axios from '../service';
// import Toast from '../../components/Toast/Toast';

// const planetsApi = {
//   fetch: () => axios.get('/planets')
//     .then(({ data, status, statusText }) => {
//       if (status > 399) {
//         throw new Error(statusText);
//       }
//       return data;
//     })
//     .catch((error) => {
//       Toast({ message: `Error ${error.response.status}: ${error.message}` });
//     }),
// };

// export default planetsApi;
import axios from '../service';
import Toast from '../../components/Toast/Toast';

const planetsApi = {
  fetch: () => axios.get('/planets')
    .then(({ data, status, statusText }) => {
      if (status > 399) {
        throw new Error(statusText);
      }
      return data;
    })
    .catch((error) => {
      Toast({ message: `Error ${error.response.status}: ${error.message}` });
    }),

  getFavorites: async () => {
    try {
      const response = await axios.get('/planets');
      return response.data;
    } catch (error) {
      console.error('Error while fetching favorites:', error);
      throw new Error('Error while fetching favorites');
    }
  },
  addToFavorites: async (planet) => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favoritePlanets')) || [];
      const isAlreadyFavorite = favorites.some(
        (favorite) => favorite.id === planet.id,
      );
      if (isAlreadyFavorite) {
        throw new Error('Planet is already in favorites');
      }
      const updatedFavorites = [...favorites, planet];
      localStorage.setItem('favoritePlanets', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw new Error('Error adding to favorites');
    }
  },
};

export default planetsApi;
