import axios from 'axios';
import { REACT_NATIVE_BASE_API } from '@env';

export const BASE_URL = `http://10.0.2.2:6000/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});
