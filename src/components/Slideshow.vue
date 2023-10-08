<template>
  <div class="slideshow">
    <div class="wrapper">
      <img :src="currentImage" :style="{ opacity: opacity }"/>
    </div>
  </div>
</template>

<script lang="ts">
import screenshot1 from "/src/assets/screenshots/screenshot1.png";
import screenshot2 from "/src/assets/screenshots/screenshot2.png";
import screenshot3 from "/src/assets/screenshots/screenshot3.png";
import screenshot4 from "/src/assets/screenshots/screenshot4.png";
import screenshot5 from "/src/assets/screenshots/screenshot5.png";

export default {
  name: "Slideshow",
  data() {
    return {
      images: [
        screenshot1, 
        screenshot2, 
        screenshot3, 
        screenshot4, 
        screenshot5
        // add more images here
      ],
      currentIndex: 3,
      timer: null,
      interval: 3500, // change this to adjust the interval between slides
      opacity: 0.6,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.opacity = 0;
        setTimeout(() => {
          this.opacity = 1;
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 300);
      }, this.interval) as unknown as null;
    },
    stopTimer() {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    this.stopTimer();
  },
};
</script>

<style scoped lang="scss">
@import '../variables.scss';
.slideshow {
  max-height: calc(90vh - #{$navbar-height});
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  .wrapper {
    background-color: black;
    margin: 0;
    img {
      transition: opacity 0.6s;
      opacity: 0.6;
      width: 100vw;
      margin: 0;
      overflow: hidden;
    }
  }
}

</style>