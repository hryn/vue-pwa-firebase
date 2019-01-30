// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VBottomNav,
  VCard,
  VForm,
  VTextField,
  VAvatar
} from 'vuetify'

import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VBottomNav,
    VCard,
    VForm,
    VTextField,
    VAvatar
  },
  theme: {
    primary: '#047dd3',
    secondary: '#c4e6ff',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})


import router from './router'
import firebase from 'firebase'
import store from './store'
import Vuefire from 'vuefire'

var config = {
  apiKey: "AIzaSyD14zWorHj1dX6-kRjXhMxVL2qqFDOO1xw",
  authDomain: "vue-firebase-ba0d3.firebaseapp.com",
  databaseURL: "https://vue-firebase-ba0d3.firebaseio.com",
  projectId: "vue-firebase-ba0d3",
  storageBucket: "vue-firebase-ba0d3.appspot.com",
  messagingSenderId: "902818324819"
};

Vue.use(Vuefire)
firebase.initializeApp(config);

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(function (user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      store,
      firebase: {
        post: firebase.database().ref('post').orderByChild('created_at')
      },
      components: { App },
      template: '<App/>'
    })
  }
});
