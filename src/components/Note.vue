<template>
  <div class="note">
    <h1>Note:</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Note",
}
</script>

<style scoped lang="scss">
@import "src/variables.scss";
.note {
  margin: 0 auto;
  border: 1px solid red;
  padding: 10px;
  background-color: $secondary;
  width: 90%;
}
</style>