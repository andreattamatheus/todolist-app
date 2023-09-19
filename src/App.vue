<template>
  <div>
    <header-menu v-if="userLogged"/>
    <router-view/>
  </div>
</template>

<script>
import TheHeaderMenu from './components/TheHeaderMenu.vue';
export default {
  components: {
    TheHeaderMenu,
  },
  computed: {
    userLogged() {
      return this.$cookies.get("_token");
    },
  },
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
