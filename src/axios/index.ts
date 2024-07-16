import axios from 'axios';

const search = axios.create({
  baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ? 'http://localhost:8080/api' : 'https://kagent.fly.dev/api',
});

export default search;
