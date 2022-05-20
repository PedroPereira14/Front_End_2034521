<template>
    <input type="email" placeholder="email" v-model="email"> 
    <input type="password" placeholder="password" v-model="password">
    <button @click="login">login</button>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    }
},
methods:{
    login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    }
}
</script>