const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      classApp: "App 1",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   // vm.firstName = "Bob"; -> With Proxy
//   vm.$data.firstName = "Bob"; // Without a Proxy
// }, 2000);
