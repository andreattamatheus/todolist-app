<template>
  <div class="h-100 w-full flex items-center justify-center bg-background-primary font-sans vl-parent"
    ref="formContainer">
    <loading v-model:active="isLoading" :is-full-page="fullPage" />
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest text-xl font-bold">Mainbox</h1>
        <div class="flex mt-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo" v-model="newTodo.title" />
          <button @click="createToDo"
            class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
            Add
          </button>
        </div>
      </div>
      <div>
        <div v-for="todo in todoList" :key="todo.id" class="flex mb-4 items-center">
          <input @keyup.enter="updateToDo(todo)" v-model="todo.title"
            :class="todo.isComplete ? 'line-through text-green' : ''" class="w-full text-grey-darkest p-2" />

          <button v-if="todo.isComplete" @click="setTodoToComplete(todo.id)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
            Not Done
          </button>
          <button v-else @click="setTodoToComplete(todo.id)"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
            Done
          </button>
          <button @click="removeToDo(todo.id)"
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

export default {
  name: "TodoListView",
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: false,
      accessToken: this.$store.state.user.accessToken,
      newTodo: {
        title: ''
      },
      todoList: [],
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
    async removeToDo(todoId) {
      this.isLoading = true;

      await this.$axios.delete(`api/v1/todos/${todoId}`, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      }).then(response => {
        if (response.status === 204) {
          const todo = this.todoList.findIndex((todo) => todo.id === todoId);
          if (todo > -1) {
            this.todoList.splice(todo, 1);
          }
        }
      }).catch(error => {
        console.error("An error occurred:", error);

      })

      this.isLoading = false;
    },
    async createToDo() {
      this.isLoading = true;
      await this.$axios.post('api/v1/todos', this.newTodo, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      }).then(response => {
        let todoCreated = {
          id: response.data.id,
          title: response.data.title,
          isComplete: false
        }
        this.todoList.unshift(todoCreated)
      }).catch(error => {
        console.error("An error occurred:", error);
      })
      this.isLoading = false;
    },
    async updateToDo(todoToUpdate) {
      this.isLoading = true;
      try {
        const response = await this.$axios.put('api/v1/todos',
          {
            'todoId': todoToUpdate.id,
            'title': todoToUpdate.title,
          },
          {
            headers: {
              'Authorization': `Bearer ${this.accessToken}`
            }
          })
        if (response.status === 204) {
          const index = this.todoList.findIndex((todo) => todo.id === todoToUpdate.id);
          if (index > -1) {
            this.todoList[index].title = todoToUpdate.title;
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      this.isLoading = false;
    },

    async getUserTodos() {
      this.isLoading = true;
      try {
        await this.$axios.get("api/v1/todos", {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`
          }
        })
          .then(response => {
            this.todoList = response.data;
          })
          .catch(error => {
            console.error("An error occurred:", error);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
      this.isLoading = false;
    }
  },
};
</script>

<style></style>