let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedClass: '',
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount('#app');
