export default {
	install(app) {
		app.config.globalProperties.$helpers = {
			dateFormatter(date) {
				const rawDate = new Date(+date);
				const splitDate = rawDate.toUTCString().split(" ").slice(1, 4);
				return splitDate.join("-");
			},
			getDifferingValues(obj1, obj2) {
				const differingValues = {};
	
				for (const key in obj1) {
					if (
						Object.prototype.hasOwnProperty.call(obj2, key) &&
						obj1[key] !== obj2[key]
					) {
						differingValues[key] = obj2[key];
					}
				}
	
				return differingValues;
			},
		};
	},
};
