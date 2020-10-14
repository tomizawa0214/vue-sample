<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">Home</p>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { gunmaNumber } from "@/gunmaNumber";

export default {
  mixins: [gunmaNumber]
};
</script>