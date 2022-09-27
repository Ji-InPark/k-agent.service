import axios from 'axios';

const search = axios;

search.defaults.baseURL = 'https://api.k-agent.services/api/search/';

export default search;
