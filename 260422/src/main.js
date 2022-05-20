import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAKvm4K06PgbFWAaQz-evBCLHj9e8OBulw",
    authDomain: "vuedog-13f5c.firebaseapp.com",
    databaseURL: "https://vuedog-13f5c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vuedog-13f5c",
    storageBucket: "vuedog-13f5c.appspot.com",
    messagingSenderId: "1088185706605",
    appId: "1:1088185706605:web:e8e79d7a05f7198d96b764"
  };

  firebase.initializeApp(firebaseConfig);
  
createApp(App).use(router).use(VueAxios, axios).mount('#app')