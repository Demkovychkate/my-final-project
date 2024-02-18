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
};

export default planetsApi;
