import axios from 'axios';
import { BASE_URL } from '../config/env';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function getHealth() {
  const res = await api.get('/health');
  return res.data;
}
