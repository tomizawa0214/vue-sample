<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    }
  },
  methods: {
    toUsers() {
      this.$router.push({ path: "users/1/profile" });
    }
  }
};
</script>