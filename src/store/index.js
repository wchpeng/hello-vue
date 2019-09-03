import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    platform: 'web',
    version: '1.0.0',
    product: '人甲',
    describe: '笑书神侠倚碧鸳'
  }
})
