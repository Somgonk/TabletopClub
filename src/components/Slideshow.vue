<template>
  <div class="slideshow">
    <div class="wrapper">
      <img :src="currentImage" />
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
      interval: 5000, // change this to adjust the interval between slides
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, this.interval) as unknown as null;
      console.log(this.currentIndex = (this.currentIndex + 1) % this.images.length)
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
  height: calc(90vh - #{$navbar-height});
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  .wrapper {
    background-color: black;
    img {
      opacity: 0.6;
      width: 100vw;
    }
  }
}

</style>