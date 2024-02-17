export default {
	install(app) {
		app.config.globalProperties.$helpers = {
			dateFormatter(date) {
				const rawDate = new Date(+date);
				const splitDate = rawDate.toUTCString().split(" ").slice(1, 4);
				return splitDate.join("-");
			},
		};
	},
};
