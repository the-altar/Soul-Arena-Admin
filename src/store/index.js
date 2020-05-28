import Vue from 'vue'
import Vuex from 'vuex'

import character from "./character"
import files from "./files"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    character: character,
    files: files
  }
})
