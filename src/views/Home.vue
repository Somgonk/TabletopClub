<script setup lang="ts">
import Slideshow from "../components/Slideshow.vue";
</script>
<template>
  <div class="home">
    <div class="header">
      <div class="slideshow-wrapper">
        <Slideshow class="slideshow"></Slideshow>
        <img src="/src/assets/tabletop_club_logo.svg" />
      </div>
      <h1>A free and open source multiplayer 3D physics-based sandbox</h1>
    </div>
    <div class="about">
      
      <div class="explanations">
        <div class="explanation">
          <h2>Free and Open-source</h2>
          <p>
            Tabletop club is free to download and play. All of the source code is available to view on 
            <a href="https://github.com/drwhut/tabletop-club">
              Github</a>. This means that <strong>you</strong> can also 
            <a href="https://tabletop-club.readthedocs.io/en/latest/general/contributing/index.html">contribute</a>!
          </p>
        </div>
        <div class="explanation">
          <h2>Multiplayer</h2>
          <p>
            Tabletop Club can be played in singleplayer or multiplayer. 
            You don't need to make an account to play multiplayer, you can just host a game and start playing with friends!
          </p>
        </div>
        <div class="explanation">
          <h2>3D Physics-Based</h2>
          <p>
            Not only is the game a simulator of tabletop games, it also has a fully-simulated 3D physics engine! 
            This means that objects in the game act like they do in real life, 
            and it also means you can potentially send objects flying off the edge! 
            Did I also mention you could flip the table?
          </p>
        </div>
        <div class="explanation">
          <h2>Sandbox</h2>
          <p>
            In Tabletop Club, you are given a box of toys to play with, and it's up to you what you do with them! 
            Sure, you can play board games, but why not make a house made of dice, then frisbee it with a poker chip? 
            Draw on the table while waiting for your opponent to make a move in chess, 
            or flip the table into deep space after losing an all-in bet? The table is your oyster!
          </p>
        </div>
        <div class="explanation">
          <h2>Tabletop Board Game</h2>
          <p>
            The game is designed to allow you to play your favourite tabletop board games 
            by effectively giving you a box of toys to play with (which include things like cards, dice, game pieces, 
            and more), and it's up to you what you do with what you're given!
          </p>
        </div>
        <div class="explanation">
          <h2>Import or Make Custom Assets</h2>
          <p>
            Do you have a D&D campaign in mind? Want to command an army in Warhammer? 
            Or is there another board game you want to play? 
            Luckily, the game uses a modular and easy-to-use 
            <a href="https://tabletop-club.readthedocs.io/en/latest/custom_assets/asset_packs/index.html">
              asset pack system
            </a> 
            that makes it really quick to import your images, 
            models, music, and more!
          </p>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/variables.scss";
.header {
  margin-top: $shrunken-navbar-height;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  max-height: calc(100vh - #{$navbar-height});
  .slideshow-wrapper {
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 30vmax;
    }
  }
}
.about {
  width: 75%;
  margin: 0 auto;
  text-align: center;
  .explanation {
    background-color: $secondary;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }
}
</style>
