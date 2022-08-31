Vue.createApp({
  data() {
    return {
      current: new Date(),
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.current = new Date();
    }, 1000);
  },
  beforeMount() {
    clearInterval(this.timer);
  },
}).mount("#app");
