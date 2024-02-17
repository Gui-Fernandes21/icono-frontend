<template>
	<div class="wrapper">
		<input
			v-model="search"
			type="text"
			:placeholder="placeholder"
			class="input-control__input"
      @input="openSelect"
		/>
		<ul v-show="searchResult.length && isOpen">
			<li
				v-for="result in searchResult"
				:key="result.name"
				@click="setSelected(result.name)"
			>
				{{ result.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
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
			search: "",
			isOpen: true,
		};
	},
	methods: {
		setSelected(value) {
      this.isOpen = false
      this.search = value;
		},
    openSelect() {
      this.isOpen = true;
    }
	},
	computed: {
		searchResult() {
			if (this.search.length == 0) return [];
			return this.source.filter((item) => {
				if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
					return item;
				}
			});
		},
	},
};
</script>
