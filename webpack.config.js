module.exports = {
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					// {
					// 	loader: "sass-loader",
					// 	options: {
					// 		implementation: "sass",
					// 		additionalData: `@import "@/styles/styles.scss";`,
					// 	},
					// },
				],
			},
		],
	},
};
