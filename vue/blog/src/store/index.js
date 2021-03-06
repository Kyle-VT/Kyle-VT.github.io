import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    account: "Kyle"
  },
  mutations: {
    fetchArticles: (state, payload) => {
        state.articles = ['a', 'b', 'c']
        state.articles = payload
    }
  },
  actions: {
    fetchArticles: async ({commit}) => {
        const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article";
        const result = await axios.get(api)
        const payload = result.data.data
        commit('fetchArticles', payload)
        // console.log(result.data.data)
        // commit('fetchArticles')
    }
  },
  modules: {

  }
})
