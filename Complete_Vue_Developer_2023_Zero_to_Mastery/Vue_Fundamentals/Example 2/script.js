let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedClass: '',
      size: 150,
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    style_classes() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        lineHeight: `${this.size}px`,
      };
    },
    transform_classes() {
      console.log('Trasform Classes');
      return {
        transform: 'rotate(30deg)',
      };
    },
  },
}).mount('#app');
