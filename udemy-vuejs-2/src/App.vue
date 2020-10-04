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
      <pre>{{ eventData.title }}</pre>
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{ eventData.host }}</pre>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
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
        title: "",
        maxNumber: 0,
        host: "",
        detail: ""
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