<template>
	<Teleport to="body">
		<div class="modal-wrapper" v-if="open">
      <div class="backdrop"></div>
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
	</Teleport>
</template>

<script>
export default {
	props: {
		open: {
			type: Boolean,
			required: true,
		},
	},
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
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

  width: 50%;
  height: 80%;
  padding: .5rem 2rem;
  
  background: #3a3a3a;
  border-radius: 10px;
  font-family: 'Russo One', sans-serif;
  font-weight: 100;
  color: #fff;
}
.modal > .close-modal {
  position: absolute;
  top: .8rem;
  right: 1.6rem;

  transform: rotate(45deg);

  color: #a0a0a0;
  cursor: pointer;
  user-select: none;

  font-weight: bold;
  font-size: 3rem;
}
</style>
