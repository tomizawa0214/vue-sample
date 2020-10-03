<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
    <hr>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script> 