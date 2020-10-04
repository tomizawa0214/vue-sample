<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <!-- プロパティではケバブケース -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
// LikeHeaderをローカル登録
import LikeHeader from "./components/LikeHeader.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
    }
  },
  components: {
    // パスカルケース
    LikeHeader,
    Home,
    About
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>