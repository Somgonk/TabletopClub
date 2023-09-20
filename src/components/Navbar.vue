<template>
	<div class="navbar">
		<router-link to="/">
      <img class="logo" src="../assets/tabletop_club_icon.png">
    </router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contribute">Contribute</router-link>
    <router-link to="/docs">Documentation</router-link>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Navbar'
}
</script>

<style scoped lang="scss">
	.navbar {
    position: fixed;
    top: 0;
    left: 0;
		width: 100%;
		height: 50px;
		background-color: rgb(173, 173, 173);
    .logo {
      height: 100px;
    }
	}
</style>