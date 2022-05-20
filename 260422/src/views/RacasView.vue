<template>
    <h1>Raças</h1>
    <div v-for="(item,index) in resultado" :key= "index">
        <router-link :to="'/racas/' + index">{{index}}</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            resultado:['cao1', 'cao2']
        }
    },
    mounted(){
        this.axios.get('https://dog.ceo/api/breeds/list/all')
                .then(res=> {
                    console.log(res.data.message)
                    this.resultado = res.data.message
                })
                
    }
}
</script>