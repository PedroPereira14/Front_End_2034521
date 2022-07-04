import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import firebase from 'firebase'
import bootstrap from 'bootstrap'

const firebaseConfig = {
    apiKey: "AIzaSyAY4Ato8ojPvjokz-cuiA4RRx5fIQq-cHo",
    authDomain: "restaurante-p2.firebaseapp.com",
    databaseURL: "https://restaurante-p2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurante-p2",
    storageBucket: "restaurante-p2.appspot.com",
    messagingSenderId: "1054093962585",
    appId: "1:1054093962585:web:9502a2e6c0629324a6f048"
};
firebase.initializeApp(firebaseConfig)
createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')

