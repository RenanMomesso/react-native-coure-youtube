import axios from 'axios';
import { REACT_NATIVE_BASE_API } from '@env';

export const BASE_URL = `https://3bd7-2804-7f0-b902-45e1-3c7f-68a-a96d-83c2.ngrok-free.app/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});
