import axios from 'axios';
import { REACT_NATIVE_BASE_API } from '@env';

export const BASE_URL = `https://c32e-2804-7f0-b901-fde1-ec9e-6da-4f74-48d4.ngrok-free.app/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});
