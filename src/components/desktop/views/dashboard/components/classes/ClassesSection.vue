<template>
	<div class="container">
		<header>
			<h2>Classes Attended</h2>
		</header>

		<div class="main-section">
			<div class="streak-count">
				<h1>0</h1>
				<span>This Week</span>
			</div>
			<div class="action">
				<span>Icon Jiu Jitsu Team - Brussels</span>
				<button>Gym Schedule</button>
			</div>
			<!-- <AutoComplete
				placeholder="Teste"
				:source="dummy"
			></AutoComplete> -->
		</div>
	</div>
</template>

<!-- <script>
import AutoComplete from "@/components/desktop/ui/AutoComplete.vue";
export default {
	data() {
		return {
			dummy: [
				{ id: 1, name: "Brazil" },
				{ id: 2, name: "France" },
				{ id: 3, name: "Belgium" },
				{ id: 4, name: "Portugal" },
			],
		};
	},
	components: {
		AutoComplete,
	},
};
</script> -->

<style scoped>
.container {
	grid-column: 2 / span 2;

	background-color: #3a3a3a;
	border-radius: 6px;
	box-shadow: 0 0 6px #0000005a;

	font-family: "Russo One", sans-serif;
	color: #fff;

	padding: 1rem;

	h2 {
		font-size: 1.2rem;
		font-weight: 100;
	}
}
header {
	border-bottom: 1px solid #16161642;
	padding-bottom: 1rem;
}

.streak-count {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	border: 5px solid #969696;
	border-radius: 50%;
	width: 10rem;
	height: 10rem;

	h1 {
		margin: 0.5rem 0;
	}

	span {
		font-family: "Poppins", sans-serif;
		font-size: 0.9rem;
	}
}

.main-section {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 90%;
}

.action > button {
	border-radius: 10px;
	border: 1px solid #6ce334;
	background-color: #6be3345b;
	color: #fff;
	cursor: pointer;
	width: 100%;

	padding: 1rem 3rem;
	margin: 1rem 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
