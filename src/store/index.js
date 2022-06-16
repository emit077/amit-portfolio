import { createStore } from "vuex";

export default createStore({
  state: {
    active_theme: "theme_light",
    theme_loader: false,
  },
  getters: {
    getActiveTheme: (state) => {
      return state.active_theme;
    },
  },
  mutations: {
    SET_ACTIVE_THEME(state, value) {
      state.active_theme = value;
    },
  },
  actions: {
    setActiveTheme({ commit }, value) {
      commit("SET_ACTIVE_THEME", value);
    },
  },
  modules: {},
});
