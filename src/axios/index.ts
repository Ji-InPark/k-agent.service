import axios from 'axios';

const search = axios.create({
  baseURL: 'https://kagent.fly.dev/api',
});

export default search;
