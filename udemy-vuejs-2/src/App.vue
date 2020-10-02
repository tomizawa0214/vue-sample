<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
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