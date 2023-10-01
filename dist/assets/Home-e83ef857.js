import{_ as a,o as s,c as o,a as t,d,b as c,e as r,p as h,f as p}from"./index-a8130369.js";const u="/TabletopClub/assets/tabletop_club_logo-3eb54152.svg",b="/TabletopClub/assets/screenshot1-1597d44c.png",m="/TabletopClub/assets/screenshot2-cd80bce4.png",_="/TabletopClub/assets/screenshot3-16678e64.png",y="/TabletopClub/assets/screenshot4-46649b9c.png",v="/TabletopClub/assets/screenshot5-53f3c1e8.png",g={name:"Slideshow",data(){return{images:[b,m,_,y,v],currentIndex:3,timer:null,interval:1500}},methods:{startTimer(){this.timer=setInterval(()=>{this.currentIndex=(this.currentIndex+1)%this.images.length},this.interval)},stopTimer(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}},computed:{currentImage(){return this.images[this.currentIndex]}},mounted(){this.startTimer()},beforeUnmount(){this.stopTimer()}};const f={class:"slideshow"},x={class:"wrapper"},w=["src"];function T(e,n,i,N,j,l){return s(),o("div",f,[t("div",x,[t("img",{src:l.currentImage},null,8,w)])])}const I=a(g,[["render",T],["__scopeId","data-v-94e26657"]]),k=e=>(h("data-v-370d27b8"),e=e(),p(),e),C={class:"home"},S={class:"header"},D=k(()=>t("img",{src:u},null,-1)),$=r('<div class="about" data-v-370d27b8><h1 data-v-370d27b8>Tabletop Club is a free and open source multiplayer 3D physics-based sandbox.</h1><h2 data-v-370d27b8>What does that mean?</h2><ul class="explanations" data-v-370d27b8><li class="explanation" data-v-370d27b8><h2 data-v-370d27b8>Free and Open-source</h2><p data-v-370d27b8> Tabletop club is free to download and play. All of the source code is available to view on <a href="https://github.com/drwhut/tabletop-club" data-v-370d27b8> Github </a> . This means that you can also <a href="https://tabletop-club.readthedocs.io/en/latest/general/contributing/index.html" data-v-370d27b8> contribute </a>! </p></li><li class="explanation" data-v-370d27b8><h2 data-v-370d27b8>Multiplayer</h2><p data-v-370d27b8> Tabletop Club can be played in singleplayer in multiplayer. You don&#39;t need to make an account to play multiplayer, you can just host a game and start playing with friends! </p></li><li class="explanation" data-v-370d27b8><h2 data-v-370d27b8>3D Physics-Based</h2><p data-v-370d27b8> Not only is the game a simulator of tabletop games, it also has a fully-simulated 3D physics engine! This means that objects in the game act like they do in real life, and it also means you can potentially send objects flying off the edge! Did I also mention you could flip the table? </p></li><li class="explanation" data-v-370d27b8><h2 data-v-370d27b8>Sandbox</h2><p data-v-370d27b8> In Tabletop Club, you are given a box of toys to play with, and it&#39;s up to you what you do with them! Sure, you can play board games, but why not make a house made of dice, then frisbee it with a poker chip? Draw on the table while waiting for your opponent to make a move in chess, or flip the table into deep space after losing an all-in bet? The table is your oyster! </p></li></ul><h2 data-v-370d27b8>Import or Make Custom Assets</h2><p data-v-370d27b8> Do you have a D&amp;D campaign in mind? Want to command an army in Warhammer? Or is there another board game you want to play? Luckily, the game uses a modular and easy-to-use <a href="https://tabletop-club.readthedocs.io/en/latest/custom_assets/asset_packs/index.html" data-v-370d27b8> asset pack system </a> that makes it really quick to import your images, models, music, and more! </p></div>',1),B=d({__name:"Home",setup(e){return(n,i)=>(s(),o("div",C,[t("div",S,[c(I),D]),$]))}});const V=a(B,[["__scopeId","data-v-370d27b8"]]);export{V as default};
