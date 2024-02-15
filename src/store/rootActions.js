export default {
  checkMobile(context) {
    context.commit('checkMobile');
  },
  async callApi(context, payload) {
    const result = await fetch("http://localhost:4001/graphql", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(payload),
		});

    if (!result.ok) {
			throw new Error("Error on the request: " + result.json());
		}

    const { data } = await result.json();

    return data;
  }
}