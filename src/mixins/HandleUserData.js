export default {
  data() {
    return {
      projects: [],
      isLoading: false,
    };
  },
  methods: {
    async getProjects() {
      this.isLoading = true;
      try {
        await this.$axios
          .get("api/v1/projects", {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          })
          .then((response) => {
            this.projects = response.data;
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
      this.isLoading = false;
    },

    async getUserTodos() {
      this.isLoading = true;
      try {
        await this.$axios
          .get("api/v1/todos", {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          })
          .then((response) => {
            this.todoList = response.data;
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      } catch (error) {
        console.error("An error occurred:", error);
      }
      this.isLoading = false;
    },
  },
};
