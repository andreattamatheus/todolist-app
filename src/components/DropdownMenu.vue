


<template>
  <!-- component -->
  <div class="flex justify-center">
    <div class="relative inline-block">
      <!-- Dropdown toggle button -->
      <button
        @click="toggleDropdown"
        class="relative z-10 flex items-center p-2 text-sm text-gray-600 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white  focus:outline-none"
      >
      <img
            class="flex-shrink-0 object-cover mx-1 rounded-full w-12 h-12"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
      
      </button>

      <!-- Dropdown menu -->
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 z-20 w-100 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
        <a
          href="#"
          class="flex items-center pl-4 pr-8 py-4 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar"
          />
          <div class="mx-4">
            <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {{userName}}
            </h1>
        
          </div>
        </a>

        <hr class="border-gray-200 dark:border-gray-700" />

        <a
          @click="redirectToProfile"
          href="#"
          class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          view profile
        </a>

        <hr class="border-gray-200 dark:border-gray-700" />
        <a
          @click="signOut"
          href="#"
          class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Sign Out
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DropdownMenu",
  props: {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDropdownOpen: false, // Initialize as closed
      
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    signOut() {
      this.$store.dispatch('user/logout')
      this.$router.push({ name: "login" });
    },
    redirectToProfile() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.$router.push({ name: "user-view" });
    },
  },
};
</script>
  
  <style scoped>
/* Add your CSS styles for the navbar-burger, navbar-menu, navbar-close, and navbar-backdrop here */
</style>
  