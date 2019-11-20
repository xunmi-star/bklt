import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    // token: "",
    id : "",
    userInfo:"",
    lang: "",
  },
  mutations: {
    userDataFromLogin(state,data){
      state.id = data.data.id
      state.userInfo = data
      // console.log("store用户信息",data)
    },
    changLang(state, lang){
      // console.log("语言切换为：",lang)
      state.lang = lang
   
    },
    loginOut(state, data){
      state.userInfo = data
    },
  },
  actions: {

  }
})
