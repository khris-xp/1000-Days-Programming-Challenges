const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      classApp: 'App 1',
      url: 'http://example.com/',
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount('#app');
