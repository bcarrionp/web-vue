import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Funk", "Sertanejo", "Pagode", "Rock", "POp", "Kpop"],
    title: "Bem vindo",
    varival: null
  },
  mutations: {
    SET_EVENT(state,payload){
      state.varival = payload
    }
  },
  actions: {
    buscarEvents({commit}){
      axios.get('https://agenda-balaguer.herokuapp.com/api/event')
      .then(res=>{console.log(res)
        const payload =res.data.values
        console.log(payload)
        commit("SET_EVENT", payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
