<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">Home</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { gunmaNumber } from "@/gunmaNumber"; 

export default {
  mixins: [gunmaNumber],
  data() {
    return {
      tmpData: "hello"
    };
  },
  components: {
    CountNumber
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = ".5rem"
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, .26)";
      }
    }
  }
};
</script>