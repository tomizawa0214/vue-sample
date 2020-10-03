<template>
  <div>
    <LikeHeader v-slot="slotProps">
      <p>{{ slotProps }}</p>
      <h2>みんさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <!-- プロパティではケバブケース -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
  </div>
</template>

<script>
// LikeHeaderをローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    // パスカルケース
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>