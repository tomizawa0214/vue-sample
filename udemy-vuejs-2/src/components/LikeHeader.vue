<template>
  <div>
    <slot name="title" :user="user" text="text"></slot>
    <slot></slot>
    <hr>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
};
</script> 