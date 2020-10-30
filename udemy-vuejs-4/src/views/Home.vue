<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"])
  },
  methods: {
    toUsers() {
      this.$router.push({ path: "users/1/profile" });
    }
  }
};
</script>