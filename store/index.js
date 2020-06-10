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
  