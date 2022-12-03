import axios from 'axios';

const search = axios;

search.defaults.baseURL = process.env.REACT_APP_ENVIRONMENT == 'development' ? 'localhost:8080/api' : 'api.k-agent.services/api';

export default search;
