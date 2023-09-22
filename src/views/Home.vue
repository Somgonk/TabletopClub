<script setup lang="ts">
import Slideshow from '../components/Slideshow.vue';
</script>
<template>
  <div class="home">
    <div class="header">
      <Slideshow></Slideshow>
      <img src="../assets/tabletop_club_logo.svg">
    </div> 
    <h1> hoem</h1>
    <h2>home</h2>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 300px;
  }
}
</style>