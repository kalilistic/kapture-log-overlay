export const lootData = {
  state: {
    log: []
  },
  mutations: {
    updateLog(state, lootData) {
      state.log.unshift(lootData);
    },
    resetLog(state) {
      state.log = [];
    }
  },
  getters: {
    haveLootData: state => {
      return state.log && state.log.length > 0;
    }
  }
};
