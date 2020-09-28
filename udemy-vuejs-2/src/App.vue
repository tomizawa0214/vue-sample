<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// LikeHeaderをローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
  components: {
    // パスカルケース
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>