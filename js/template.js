Vue.createApp({
  // data: function () {
  //   return {
  //     current: new Date().toLocaleString();
  //   }
  data() {
    return {
      message: "皆さんこんにちは",
      url: "https://wings.msn.to/",
      flag: false,
      email: "y-Suzuki@example.com",
    };
  },
  computed: {
    localEmail() {
      return this.email.split("@")[0].toLowerCase();
    },
  },
  // methods: {
  //   localEmail: function () {
  //     return this.email.split("@")[0].toLowerCase();
  //   },
  // },
  // computed: {
  //   randomc: function () {
  //     return Math.random();
  //   },
  // },
  // methods: {
  //   onclick: function () {
  //     this.current = new Date().toLocaleString();
  //   },
  //   randomm: function () {
  //     return Math.random();
  //   },
  // },
}).mount("#app");
