const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      classApp: 'App 1',
      url: 'http://example.com/',
      raw_url: '<p><a href="http://example.com/">Example.com</a></p>',
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount('#app');
