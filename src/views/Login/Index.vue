<template>
  <div class="py-6">
    <div
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        style="
          background-image: url('https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/9affffb4ec5c115b8f742cd34b663cff/best_to_do_apps.jpg');
        "
      ></div>
      <div class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">
          The ToDo App
        </h2>
        <p class="text-sm text-gray-600 text-center">It's time to organize!</p>
        <a
          href="#"
          class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
        >
          <div class="px-4 py-3">
            <svg class="h-6 w-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
            Sign in with Google
          </h1>
        </a>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" class="text-xs text-center text-gray-500 uppercase"
            >or login with email</a
          >
          <span class="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Email Address</label
          >
          <input
            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            id="email"
            name="email"
            v-model="form.email"
            placeholder="email@example.com"
          />
          <span v-if="this.validationErrors.email">{{ this.validationErrors.email }}</span>
        </div>

        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
            <a href="#" class="text-xs text-gray-500">Forget Password?</a>
          </div>
          <input
            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            id="password"
            name="password"
            v-model="form.password"
          />
          <span v-if="this.validationErrors.password">{{ this.validationErrors.password }}</span>
        </div>
        <div class="mt-8">
          <button
            class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            @click="login"
            v-if="!loading"
          >
            Login
          </button> 
          <Loader v-if="loading" />
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 md:w-1/4"></span>
          <router-link to="/register" class="text-xs text-gray-500 uppercase"
            >or sign up</router-link
          >
          <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
    <notification-pop-up v-if="showNotification"/>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import NotificationPopUp from '@/components/notifications/NotificationPopUp.vue';

export default {
  name: "LoginView",
  components: {
    Loader,
    NotificationPopUp,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      validationErrors: {},
      loading: false,
      message: '',
      showNotification: false,
    };
  },
  mounted() {
    if (this.$route.query.message) {
      this.showNotification = true;
    }

    setTimeout(() => {
        this.showNotification = false;
    }, 5000);
  },
  methods: {
    async login(event) {
      this.loading = true;
      await this.$axios
        .post("api/v1/login", this.form)
        .then(({ data }) => {
          this.validationErrors = {};
          this.signIn(data);
        })
        .catch((error) => {
          let errorFormatted = error.response.data.errors;
          this.validationErrors = {
            'email': errorFormatted.email?.[0], 
            'password': errorFormatted.password?.[0], 
          };
        })
        .finally(() => {
          this.loading = false;
        });
    },
    signIn(data) {
      this.$store.dispatch('user/login', data)
      this.$cookies.set(
        "_token",
        `${data.token_type} ${data.access_token}`,
        "1d"
      );
      console.log('sigIn');
      this.$router.push({ name: "home" });
    },
  },


};
</script>

<style>
</style>