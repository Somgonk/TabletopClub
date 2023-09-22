<template>
  <div :class="['navbar', { 'shrunken-navbar': isScrolled }]">
    <div class="logo-wrapper">
      <router-link to="/TabletopClub/">
        <div class="logo">
          <img src="../assets/tabletop_club_icon.png" />
          <h1>Tabletop Club</h1>
        </div>
      </router-link>
    </div>
    <div class="links">
      <router-link to="/TabletopClub/download">
        <h3>Download</h3>
      </router-link>
      <router-link to="/TabletopClub/contribute">
        <h3>Contribute</h3>
      </router-link>
      <router-link to="/TabletopClub/documentation">
        <h3>Documentation</h3>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
        this.isScrolled = currentScrollPosition > 10;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans&display=swap");

.navbar {
  z-index: 999;
  transition: ease .3s;
  font-family: "Bungee", cursive;
  position: sticky;
  top:0;
  left: 0;
  justify-content: space-between;
  display: flex;
  width: 100vw;
  height: $navbar-height;
  background-color: $secondary;
  opacity: 1;
  a {
    transition: color ease 0.1s;
    text-decoration: none;
    color: $text;
  }
  a:hover {
    color: $accent;
  }
  .logo-wrapper {
    height: 100%;
    display: block;
  }
  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 0;
    img {
      height: 100%;
    }
    h1 {
      white-space: nowrap;
    }
  }
  .links {
    display: flex;
    align-items: center;
    a {
      margin: 0 20px;
    }
    h3 {
      margin: 0;
    }
  }
}
.shrunken-navbar {
  height: $shrunkn-navbar-height;
}
</style>
