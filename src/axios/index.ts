import axios from 'axios';

const search = axios;

search.defaults.baseURL = process.env.REACT_APP_ENVIRONMENT == 'development' ? '' : 'https://api.k-agent.services/api/search/';

export default search;
