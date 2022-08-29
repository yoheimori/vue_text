Vue.createApp({
  data: function () {
    return {
      message: "皆さんこんにちは",
      url: "https://wings.msn.to/",
      flag: false,
      email: "y-Suzuki@example.com",
    };
  },
  //   computed: {
  //     localEmail: function () {
  //       return this.email.split("@")[0].toLowerCase();
  //     },
  //   },
  methods: {
    localEmail: function () {
      return this.email.split("@")[0].toLowerCase();
    },
  },
}).mount("#app");
