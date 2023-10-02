<template>
  <div class="dowload">
    <div class="links">
      <a href="https://drwhut.itch.io/tabletop-club/#download" rel="nofollow">
        <img
          src="https://camo.githubusercontent.com/44dcb1b85b41578ffb891255653b9a42b26334d06cb6cdd7dd90f085d2595ffe/68747470733a2f2f7374617469632e697463682e696f2f696d616765732f62616467652d636f6c6f722e737667"
          alt="Download on itch.io"
          height="80"
          data-canonical-src="https://static.itch.io/images/badge-color.svg"
          style="max-width: 100%"
        />
      </a>
      <a
        href="https://flathub.org/apps/io.itch.drwhut.TabletopClub"
        rel="nofollow"
      >
        <img
          height="80"
          alt="Download on Flathub"
          src="https://camo.githubusercontent.com/d5f6dff9762b8d89f3d7d35e6a8e6b5e6d3e3e3c26dd2aaf3d8e5bfa176534a1/68747470733a2f2f646c2e666c61746875622e6f72672f6173736574732f6261646765732f666c61746875622d62616467652d656e2e706e67"
          data-canonical-src="https://dl.flathub.org/assets/badges/flathub-badge-en.png"
          style="max-width: 100%"
        />
      </a>
    </div>
    <h2>or</h2>
    <p>
      Download the
      <a href="https://github.com/drwhut/tabletop-club"> source code</a>
      and compile it from scratch. <br> (This requires a few extra steps compared to
      running a pre-built binary, but you'll need to do this if you plan on
      contributing to the game code, or you could try it for fun!)
    </p>
    <p>
      See
      <a
        href="https://tabletop-club.readthedocs.io/en/stable/general/download/downloading_binaries.html"
      >
        Downloading the official binaries</a
      >
      or
      <a
        href="https://tabletop-club.readthedocs.io/en/stable/general/download/compiling_from_source.html"
      >
        Compiling from the source code</a
      >
      for more details.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Download",
  mounted() {
    window.scrollTo(0, 0);
  }
};

</script>

<style scoped lang="scss">
@import "src/variables.scss";
.dowload {
  margin: 0 auto;
  margin-top: $navbar-height;
  min-height: calc(100vh - #{$navbar-height});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  text-align: center;
}
.links {
  margin: 10px;
  a {
    all: revert;
    margin: 10px;
  }
}
</style>
