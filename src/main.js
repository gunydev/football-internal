import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

import * as firebase from 'firebase/app';
import 'firebase/firebase-auth';
Vue.config.productionTip = false

let app = '';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD526XalGcfkB8Y9tvYwNtGSuhrpvKnEq4',
  authDomain: 'football-internal.firebaseapp.com',
  databaseURL: 'https://football-internal.firebaseio.com',
  projectId: 'football-internal',
  storageBucket: '',
  messagingSenderId: '231640263764',
  appId: '1:231640263764:web:83816ce25ab60f7a0e11c1'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
