import axios from 'axios';

const search = axios;

search.defaults.baseURL = process.env.REACT_APP_ENVIRONMENT == 'development' ? 'http://localhost:8080/api' : 'https://api.k-agent.services/api';

export default search;
