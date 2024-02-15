import axios from '../service';

const planetsApi = {
  fetch: () => axios.get('/planets')
    .then(({ data, status, statusText }) => {
      if (status > 399) {
        throw new Error(statusText);
      }
      return data;
    })
    .catch((err) => {
      console.error(err);
    }),
};

export default planetsApi;
