import axios from 'axios';

const search = axios;

search.defaults.baseURL = 'https://kagent.fly.dev/api';

export default search;
