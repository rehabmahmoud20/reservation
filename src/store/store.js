import booking from "./modules/booking";

import { createStore } from "vuex";

const store = createStore({
  // global ui 
  state: {
    modalOpenCloseVal: false,
  },
  getters: {
    modal: (state) => {
      return state.modalOpenCloseVal;
    },
  },
  mutations: {
    handleModal: (state) => {
      state.modalOpenCloseVal = !state.modalOpenCloseVal;
    },
  },
  actions: {
    handleModal: ({ commit }) => {
      commit("handleModal");
    },
  },

  modules: {
    booking,
  },
});
export default store;
