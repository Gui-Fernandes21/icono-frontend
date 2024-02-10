<template>
	<Teleport to="body">
		<Transition>
			<div class="modal-wrapper" v-if="open">
				<div class="backdrop" @click="closeModal"></div>
				<div class="modal">
					<span class="close-modal" @click="closeModal">+</span>
					<header>
						<slot name="header" />
					</header>

					<div class="main-section">
						<slot name="main" />
					</div>

					<div class="action">
						<slot name="action" />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script>
export default {
  emits: ['close-modal'],
	props: {
		open: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		closeModal() {
			this.$emit("close-modal");
		},
	},
};
</script>

<style scoped>
.modal-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;

	transition: all 200ms ease-in-out;

	display: grid;
	place-items: center;
}
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;

	cursor: pointer;

	background: #00000040;
	backdrop-filter: blur(1px);
}
.modal {
	position: relative;
	z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

	width: 35%;
	height: 80%;
	padding: 0.5rem 2rem 1rem;

	background: #3a3a3a;
	border-radius: 10px;
	font-family: "Russo One", sans-serif;
	font-weight: 100;
	color: #fff;
}
.modal > .close-modal {
	position: absolute;
	top: 0.8rem;
	right: 1.6rem;

	transform: rotate(45deg);

	color: #a0a0a0;
	cursor: pointer;
	user-select: none;

	font-weight: bold;
	font-size: 3rem;
}

.modal > .close-modal:hover {
  color: #c6c6c6;
}
.modal > .main-section {
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
