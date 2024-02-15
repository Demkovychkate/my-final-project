import axios from 'axios';

export default axios.create({
  baseURL: 'https://65cddee1c715428e8b3f51e8.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
