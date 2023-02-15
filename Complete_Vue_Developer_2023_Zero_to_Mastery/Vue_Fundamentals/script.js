const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      classApp: 'App 1',
      url: 'http://example.com/',
      raw_url: '<p><a href="http://example.com/">Example.com</a></p>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault();
      this.lastName = event.target.value;
      console.log(msg);
      console.log(this.lastName);
    },
  },
}).mount('#app');
