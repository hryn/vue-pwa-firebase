// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const state = {
  imageAPI: 'https://picsum.photos/300/300?image=',
  randomImage: null
}
 
const actions = {
  GET_RANDOM_IMAGE({ commit }) {
    const randId = Math.floor(Math.random() * 300);

    axios.get(state.imageAPI + randId)
      .then((response) => {
        commit('SET_RANDOM_IMAGE', response.config.url)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

}

const mutations = {
  SET_RANDOM_IMAGE: (state, url ) => {
    state.randomImage = url
  },
  SET_DISPLAY_NAME: (state, name) => {
    state.profile.name = name
  }
}

const getters = {
  profile: state => {
    return state.profile
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
