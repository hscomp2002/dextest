import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state:{
    token : null,
    user:null,
    menus : null,
    menuToggle : "toggled",
    menuActiveId : 1
  },
  mutations:{
    set(state:any,[variable , value] : Array<any>): void {
      state[variable] = value;
    }
  },
  actions: {},
  modules: {},
});
