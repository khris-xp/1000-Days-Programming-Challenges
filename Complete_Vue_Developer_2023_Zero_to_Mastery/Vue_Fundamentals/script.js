const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      classApp: 'App 1',
      url: 'http://example.com/',
      raw_url: '<p><a href="http://example.com/">Example.com</a></p>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      this.lastName = event.target.value;
      console.log(msg);
      console.log(this.lastName);
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
      // console.log(this.middleName);
    },
  },
}).mount('#app');
