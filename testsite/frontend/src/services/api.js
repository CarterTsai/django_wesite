// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/', // 替換為您的 API URL
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;