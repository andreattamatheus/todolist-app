<template>
  <div
    class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <div class="flex mt-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            v-model="newTodo.title"
          />
          <button
            @click="createToDo"
            class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <div
          v-for="todo in todoList"
          :key="todo.id"
          class="flex mb-4 items-center"
        >
          <p
            :class="todo.isComplete ? 'line-through text-green' : ''"
            class="w-full text-grey-darkest"
          >
            {{ todo.title }}
          </p>

          <button
            v-if="todo.isComplete"
            @click="setTodoToComplete(todo.id)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
          >
            Not Done
          </button>

          <button
            v-else
            @click="setTodoToComplete(todo.id)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          >
            Done
          </button>

          <button
            @click="removeToDo(todo.id)"
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
  name: "TodoListView",
  data() {
    return {
        newTodo: {
            title: ''
        },
        todoList: [
            {
            id: 1,
            title: "Todo List #1",
            isComplete: false,
            },
            {
            id: 2,
            title: "Todo List #2",
            isComplete: false,
            },
            {
            id: 3,
            title: "Todo List #3",
            isComplete: false,
            },
        ],
        };
  },
  mounted() {
    this.getUserTodos();
  },
  methods: {
    setTodoToComplete(id) {
      this.todoList.filter((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete ? true : false;
        }
      });
    },
    removeToDo (id) {
        const objWithIdIndex = this.todoList.findIndex((todo) => todo.id === id);
        console.log(objWithIdIndex)
        if (objWithIdIndex > -1) {
            this.todoList.splice(objWithIdIndex, 1);
        }
    },
    createToDo()
    {
        this.todoList.push(this.newTodo)
        this.newTodo = {title: ''}
    },

    async getUserTodos()
    {
      console.log('entrou no getUserTodos')
      await this.$axios
        .get("api/v1/todos")
        .then(({ data }) => {
          this.todoList = data;
          this.signIn(data);
        })
        .catch((error) => {
          alert(error);
        })
    }
  },
};
</script>

<style>
</style>