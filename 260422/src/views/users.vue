<template>
    <h1>Utilizadores</h1>
    <div v-for="(user, index) in resultado" :key="index">
        <h3>nome: {{user.name}}</h3>
    </div>
</template>
<script>
export default {
    name: "users",
    data(){
        return{
            resultado: []
        }
    },
    mounted(){
        this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                res => {
                    this.resultado=res.data
                }
            )   
    }
}
</script>