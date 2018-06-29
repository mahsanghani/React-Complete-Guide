import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-complete.firebaseio.com/'
});

export default instance;