<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          :class="validationErrors?.name ? 'border-red-500' : 'border-gray-300'"
          type="text" id="name" name="name" placeholder="John Doe" v-model="form.name" required />
        <span class="text-red-500" v-if="validationErrors?.name">{{ validationErrors?.name }}</span>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block w-full appearance-none"
          :class="validationErrors?.email ? 'border-red-500' : 'border-gray-300'"
          type="email" id="email" name="email" placeholder="john@example.com" v-model="form.email" required />
        <span class="text-red-500" v-if="validationErrors?.email">{{ validationErrors?.email }}</span>

      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          :class="validationErrors?.password ? 'border-red-500' : 'border-gray-300'"
          type="password" id="password" name="password" placeholder="********" v-model="form.password" required />
        <span class="text-red-500" v-if="validationErrors?.password">{{ validationErrors?.password }}</span>
      </div>
      <Loader v-if="loading" />
      <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" 
        v-else
        @click="registerUser"
      >
        Register
      </button>

    </form>
    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 md:w-1/4"></span>
      <router-link to="/" class="text-xs text-gray-500 uppercase">or sign in</router-link>
      <span class="w-1/5 md:w-1/4"></span>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';

export default {
  name: "RegisterView",
  components: {
    Loader,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      validationErrors: {
        name: null,
        email: null,
        password: null,
      },
      loading: false,
    };
  },
  methods: {
    async registerUser(event) {
      event.preventDefault();
      this.loading = true;
      if (this.validateForm()) {
        await this.$axios
          .post("api/v1/register", this.form)
          .then((response) => {
            if (response.status == 200) {
              this.$router.push({
                name: "login", query: {
                  message: 'User registered successfully. Email verification link sent to your email.'
                }
              });
            }
          })
          .catch((error) => {
            if (error.response && error.response.data.errors) {
              this.validationErrors = this.convertErrorFromArray(error);
            }
          })
      }
      console.log(this.validationErrors);
      this.loading = false;
      return;

    },

    validateForm() {
        let isValid = true;
        for (let key in this.form) {
            if (!this.form[key].trim()) {
                this.validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
                isValid = false;
            } else {
                this.validationErrors[key] = null;
            }
        }

        return isValid;
    },

    convertErrorFromArray(error) {
      const transformedErrors = {};
      for (let field in error.response.data.errors) {
          transformedErrors[field] = error.response.data.errors[field][0];
      }
      return transformedErrors;
    }
  },
};
</script>

<style></style>