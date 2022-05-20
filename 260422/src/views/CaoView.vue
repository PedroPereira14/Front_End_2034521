<template>
    <h1>{{$route.params.id}}</h1>
    <div v-for="(item,index) in dados" :key="index">
        <img :src="item" width="300" alt="">
    </div>
</template>
<script>
export default{
    data(){
        return{
            dados:[]
        }
    },
    mounted (){
        this.axios.get('https://dog.ceo/api/breed/' + this.$route.params.id + '/images')
        .then(
            res =>{
                this.dados = res.data.message
            })
    }
}
</script>