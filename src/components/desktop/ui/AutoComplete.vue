<template>
	<div class="wrapper">
		<div class="select-wrapper">
			<input
				:value="modelValue.name"
				type="text"
				:placeholder="placeholder"
				class="input-control__input"
				@input="handleInput"
				@keyup="selectFirst"
			/>
			<span v-if="searchResult.length" class="clear" @click="clearInput"
				>+</span
			>
			<span v-else class="chevron">></span>
		</div>
		<ul v-show="searchResult.length && isOpen">
			<li
				v-for="result in searchResult"
				:key="result.name"
				@click="setSelected(result)"
			>
				{{ result.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	emits: ["update:modelValue"],
	props: {
		source: {
			type: Array,
			required: true,
			default: () => [],
		},
		placeholder: {
			type: String,
		},
	},
	data() {
		return {
			modelValue: {
				id: null,
				name: "",
			},
			isOpen: true,
		};
	},
	methods: {
		setSelected(value) {
			this.isOpen = false;
			this.modelValue = {...value};
			this.$emit("update:modelValue", this.modelValue);
		},
		handleInput(event) {
			this.modelValue.id = null
			this.modelValue.name = event.target.value;
			
			this.$emit("update:modelValue", this.modelValue);
			this.isOpen = true;
		},
		closeSelect() {
			this.isOpen = false;
		},
		clearInput() {
			this.modelValue = {
				id: null,
				name: "",
			};
			this.$emit("update:modelValue", this.modelValue);
		},
		selectFirst(e) {
			if (e.keyCode == 13) {
				this.modelValue = { ...this.searchResult[0] };
				this.$emit("update:modelValue", this.modelValue);
				this.closeSelect();
			}
		},
	},
	computed: {
		searchResult() {
			if (this.modelValue.name.length == 0) return [];
			return this.source.filter((item) => {
				if (
					item.name.toLowerCase().includes(this.modelValue.name.toLowerCase())
				) {
					return item;
				}
			});
		},
	},
};
</script>

<style scoped>
.wrapper {
	position: relative;
}
.select-wrapper {
	position: relative;

	margin: 1rem 0 5px;

	span {
		position: absolute;
		display: flex;
		top: 28%;
		right: 9px;
		font-size: 1.6rem;
		font-family: "Poppins", sans-serif;
		font-weight: 400;

		transition: all 150ms ease-in-out;
	}
}
.chevron {
	transform: rotate(90deg);
}
.clear {
	cursor: pointer;
	transform: rotate(45deg);

	&:hover {
		color: #c0c0c0;
	}
}

input {
	margin: 0;
}

.input-control__input {
	width: 100%;
}
ul {
	position: absolute;
	width: 100%;
	/* padding: 5px 0; */
	background-color: #5a5a5a;
}
li {
	list-style: none;
	padding: 1rem;
	border-bottom: 1px solid gray;
	background-color: #5a5a5a;
	cursor: pointer;

	transition: all 100ms ease-in-out;

	&:hover {
		background-color: #424242;
	}
}
</style>
