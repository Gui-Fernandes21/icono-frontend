<template>
	<div class="container">
		<div class="img-container">
			<img src="/img/gui-pan-medal.jpg" alt="" />
		</div>
		<header>
			<h1>{{ user ? user.name : ''}}</h1>
			<span class="belt">Brown Belt</span>
		</header>
		<span class="gym">Icon Jiu Jitsu Team - Brussels</span>

    <div class="action">
      <button>edit profile</button>
    </div>
	</div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  grid-column: 1;
  grid-row: 1;

	background-color: #464646;
	border-radius: 6px;

	font-family: "Russo One", sans-serif;
	color: #fff;

	padding: 3rem 1rem;
}
header {
  display: grid;
  place-items: center;
  
  h1 {
    margin-bottom: .5rem;
  }
  span {
    margin: 0;
  }
}
span {
  font-family: "Poppins", sans-serif;
}
.gym {
  margin: 2rem 0;
}
.img-container {
	border-radius: 50%;
	width: 15rem;
	height: 15rem;

	overflow: hidden;

	img {
		width: 100%;
	}
}
.action > button {
  background-color: #e3943435;
  border: 1px solid #E39534;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;

  padding: 1rem 5rem;
}
</style>
