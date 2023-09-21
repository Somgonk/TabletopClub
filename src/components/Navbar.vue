<template>
	<div class="navbar">
		<div class="logo-wrapper">
			<router-link to="/TabletopClub/">
				<div class="logo">
					<img src="../assets/tabletop_club_icon.png" />
					<h1>Tabletop Club</h1>
				</div>
			</router-link>
		</div>
		<div class="links">
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
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans&display=swap');

$navbar-height: 75px;

.navbar {
	font-family: 'Bungee', cursive;
	position: sticky;
	justify-content: space-between;
	display: flex;
	width: 100vw;
	height: $navbar-height;
	background-color: $secondary;
	a {
		transition: color ease 0.2s;
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
	}
	.links {
		display: flex;
		align-items: center;
		a {
			margin: 0 20px;
		}
	}
}
</style>
