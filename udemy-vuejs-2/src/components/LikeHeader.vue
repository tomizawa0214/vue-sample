<template>
  <div>
    <slot>
      <h2>デフォルトのタイトル</h2>
    </slot>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script> 