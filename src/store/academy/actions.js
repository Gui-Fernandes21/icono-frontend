export default {
	async getAcademiesCombo({ dispatch, commit }) {
		const query = `
      query {
        academies {
          id
          name
        }
      }
    `;

		const payload = { query };

		const data = await dispatch("callApi", payload);

		if (!data.academies === null) {
			throw new Error("An error occured when trying to fetch the academies");
		}

		await commit("setAcademies", data.academies);

		return { msg: "ok", status: 200 };
	},
};
