import axios from 'axios';
import { API_URL } from '../helpers/constants';

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default Axios;