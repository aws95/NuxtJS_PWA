export const state = () => ({
  products: []
});

export const getters = {
  getProducts: state => {
    return state.products;
  }
};
export const mutations = {
  SET_IP: (state, payload) => {
    state.products = payload;
  }
};

/*export const actions = () => ({
  async getIP({ commit }) {
    const ip = await this.$axios.$get("http://localhost:8080/products");
    commit("SET_IP", ip);
  }
});
*/ 