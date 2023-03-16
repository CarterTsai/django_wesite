<script>
import { ref } from 'vue';
import todoService from '../services/todoService';

export default {
  setup() {
    const todos = ref([]);
    const newTodoTitle = ref('');

    async function fetchTodos() {
      todos.value = await todoService.fetchTodos();
    }

    async function addTodo() {
      if (!newTodoTitle.value) return;
      const newTodo = {
        title: newTodoTitle.value,
        completed: false
      };
      const createdTodo = await todoService.createTodo(newTodo);
      todos.value.push(createdTodo);
      newTodoTitle.value = '';
    }

    async function deleteTodo(id) {
      const response = await todoService.deleteTodo(id);
      console.log(response);
      if (response.status === 204) {
        todos.value = todos.value.filter(todo => todo.id !== id);
      } else {
        console.log(`Error: Unable to delete Todo with ID ${id}.`);
      }
    }

    fetchTodos();

    return {
      todos,
      newTodoTitle,
      addTodo,
      deleteTodo
    };
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>ToDo List</h1>
            <v-list>
              <v-list-item v-for="todo in todos" :key="todo.id">
                <v-card
                  width="400"
                  variant="outlined"
                >
                  <v-card-title>{{ todo.title }}</v-card-title>
                  <v-card-subtitle>{{ todo.created_at }}</v-card-subtitle>
                  <v-card-text>{{ todo.created_at?"完成":"未完成" }}</v-card-text>
                </v-card>
                <v-card-actions>
                  <v-btn variant="outlined" @click.prevent="deleteTodo(todo.id)">
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-list-item>
            </v-list>
            <v-form @submit.prevent="addTodo">
              <v-text-field
                v-model="newTodoTitle"
                label="Add ToDo"
                outlined
                clearable
              ></v-text-field>
              <v-btn type="submit" color="primary">Add</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
