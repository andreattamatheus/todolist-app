<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
          >Name</label
        >
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
          >Email</label
        >
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
          >Password</label
        >
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirm-password"
          >Confirm Password</label
        >
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="********"
        />
      </div>
      <button
        class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
        type="submit"
      >
        Register
      </button>
    </form>
    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 md:w-1/4"></span>
      <router-link to="/" class="text-xs text-gray-500 uppercase"
        >or sign in</router-link
      >
      <span class="w-1/5 md:w-1/4"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>