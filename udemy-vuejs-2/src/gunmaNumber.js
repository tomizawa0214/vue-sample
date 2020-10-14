export const gunmaNumber = {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Nakanojo is a great city.",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log("created in Mixin");
  }
}