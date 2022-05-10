export default {
  async signup({ commit }, variables) {
    const query = `
      mutation($data: SignupInput!) {
        signup(data: $data) {
          token
          userId
        }
      }`;

    const payload = {
      query: query,
      variables: { data: variables },
    };

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

    // data is returned deeply nested
    const { data } = await result.json();

    await commit("authenticate", data.signup);

    return { msg: "ok", status: 200 };
  },
  async login({ commit }, variables) {
    const query = `
      mutation Login($data: LoginInput!) {
        login(data: $data) {
          token
          userId
        }
      }
    `;

    const payload = {
      query,
      variables: { data: variables },
    };

    const result = await fetch("http://localhost:4001/graphql", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!result.ok) {
      throw new Error("Error on the request: " + result);
    }

    // data is returned deeply nested
    const { data } = await result.json();

    console.log(data);

    await commit("authenticate", data.login);

    return { msg: "ok", status: 200 };
  },
  logout({ commit }) {
    commit('logout')
  } 
};
