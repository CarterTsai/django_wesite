// src/services/todoService.js
import apiClient from './api';

export default {
  async fetchTodos() {
    const response = await apiClient.get('/todos/?format=json');
    return response.data;
  },
  async createTodo(todo) {
    const response = await apiClient.post('/todos/', todo);
    return response.data;
  },
  async deleteTodo(id) {
    const response = await apiClient.delete(`/todos/${id}/`);
    console.log(response);
    return response;
  }
};