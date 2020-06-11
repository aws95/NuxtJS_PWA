export const state = () => ({
  products: []
});

export const getters = {
  getProducts: state => {
    return state.products;
  }
};
export const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload;
  }
};

export const actions = {
  async getproducts({ commit }) {
    const ip = await this.$axios.$get("http://localhost:8880/products");
    commit("SET_PRODUCTS", ip);
  }
};
