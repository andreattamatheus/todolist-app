


<template>
  <header>
    <nav class="bg-background-white border-gray-800 px-4 lg:px-6 py-0">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div v-if="userIsAuthenticated" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <div class="flex items-center lg:order-2">

            <router-link to="/home" href="#" class="flex items-center">
              <img width="48" height="48" src="https://img.icons8.com/deco/48/todo-list.png" alt="todo-list" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">ToDoApp</span>
            </router-link>
          </div>
          <!-- component -->
        </div>
        <dropdown-menu :userName="nameUserLoggedIn" :userEmail="emailUserLoggedIn" />
      </div>

      <div v-if="!userIsAuthenticated" class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div class="flex items-center lg:order-2">
          <button data-collapse-toggle="mobile-menu-2" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex items-center">
            <img src="https://www.svgrepo.com/show/503110/todo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">ToDoApp</span>
          </a>
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
        </div>

        <div v-if="!userIsAuthenticated" class="flex items-center md:order-1">
          <a href="#"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
          <a href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign
            up</a>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>
import DropdownMenu from "./DropdownMenu.vue";

export default {
  name: "TheHeaderMenu",
  components: {
    DropdownMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
  computed: {
    nameUserLoggedIn() {
      return this.$store.getters["user/name"];
    },
    emailUserLoggedIn() {
      return this.$store.getters["user/email"];
    },
    userIsAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    },
  },
};
</script>
  
<style scoped>
/* Add your CSS styles for the navbar-burger, navbar-menu, navbar-close, and navbar-backdrop here */
</style>
  