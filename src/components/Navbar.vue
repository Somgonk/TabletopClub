<template>
  <div :class="['navbar-wrapper', { 'shrunken-navbar-wrapper': isScrolled }]">
    <div :class="['navbar', { 'shrunken-navbar': isScrolled }]">
      <div class="logo-wrapper" @click="scrollToTop()">
        <router-link to="/TabletopClub/">
          <div class="logo">
            <img src="../assets/tabletop_club_icon.png" />
            <h1 v-if="displayTitle">Tabletop Club</h1>
          </div>
        </router-link>
      </div>
      <div class="links" v-if="!isMobile">
        <a @click="scrollToAbout()">
          <h3>About</h3>
        </a>
        <router-link to="/TabletopClub/download">
          <h3>Download</h3>
        </router-link>
        <a href="https://tabletop-club.readthedocs.io/en/latest/general/contributing/index.html">
          <h3>Contribute</h3>
        </a>
        <a href="https://tabletop-club.readthedocs.io">
          <h3>Documentation</h3>
        </a>
        <a href="https://tabletop-club.readthedocs.io/en/latest/general/about.html#frequently-asked-questions">
          <h3>FAQ</h3>
        </a>
      </div>
      <img class="menu-button" src="../assets/icons/menu.svg" v-if="isMobile" @click="menuOpen = !menuOpen">
    </div>
    <div class="dropdown" v-if="menuOpen && isMobile" @click="menuOpen = false">
      <router-link to="/TabletopClub/" @click="scrollToTop()">
        <h3>Home</h3>
      </router-link>
      <a @click="scrollToAbout()">
        <h3>About</h3>
      </a>
      <router-link to="/TabletopClub/download">
        <h3>Download</h3>
      </router-link>
      <a href="https://tabletop-club.readthedocs.io/en/latest/general/contributing/index.html">
        <h3>Contribute</h3>
      </a>
      <router-link to="/TabletopClub/documentation">
        <h3>Documentation</h3>
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
import router from '../router/router';

export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
      isMobile: false,
      displayTitle: true,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.handleResize)
    this.handleResize();
    window.addEventListener("click", this.handleClick);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.handleResize)
    window.removeEventListener("click", this.handleClick);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
        this.isScrolled = currentScrollPosition > 10;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 1100;
      this.displayTitle = window.innerWidth > 400;
    },
    handleClick(event: MouseEvent) {
      event
    },
    checkPath() {
      if (window.location.pathname != "/TabletopClub/") {
        router.push({ path: "/TabletopClub/" });
      }
      return true;
    },
    scrollToAbout () {
      this.checkPath();
      setTimeout(() => {
        const about = document.querySelector('.about');
        if (about) {
          this.isScrolled = true;
          const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--shrunken-navbar-height'));
          const scrollPosition = about.getBoundingClientRect().top + window.scrollY - navbarHeight - 5;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
      }, 75);
    },
    scrollToTop() {
      if (window.location.pathname == "/TabletopClub/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans&display=swap");
a {
  all: revert;
}
.navbar-wrapper {
  z-index: 999;
  position: fixed;
  top:0;
  left: 0;
  height: $navbar-height;
  transition: height ease .3s;
  border-bottom: 2px solid $background;
  
}

.navbar {
  z-index: 999;
  transition: height ease .3s;
  font-family: "Bungee", cursive;
  top:0;
  left: 0;
  justify-content: space-between;
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: $secondary;
  opacity: 1;
  a {
    transition: color ease 0.2s;
    text-decoration: none;
    color: $text;
    background-color: transparent;
    border-radius: 0;
  }
  a:hover {
    color: $accent;
  }
  .logo-wrapper {
    height: 100%;
    display: block;
  }
  .logo {
    margin-top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 0;
    img {
      height: 100%;
    }
    h1 {
      white-space: nowrap;
      margin: 0;
      padding: 0;
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
.dropdown {
  background-color: $secondary;
  text-align: center;
  transition-duration: .3s;
  a {
    transition: color ease 0.2s;
    text-decoration: none;
    color: $text;
  }
  a:hover {
    color: $accent;
  }
  h3 {
    margin: 0;
    padding: 5px;
  }
}
.shrunken-navbar-wrapper {
  height: $shrunken-navbar-height;
}
</style>
