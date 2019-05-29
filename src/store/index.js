import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 创建状态共享仓库
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,payload) {
      state.count += payload.amount;
    }
  }
})
export default store;