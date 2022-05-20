<template>

    <input type="text" v-model='pesquisa'>
    <button >pesquisar</button>
    <div v-for="(item,index) in dados" :key="index">
        <img src="item" width="300" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            dados:[]
        }
    },
    methods:{
      pesquisar(dados){
        this.axios.get('https://dog.ceo/api/breed/' + dados + '/images')
        .then(
            (x) =>{
                this.dados = x.data.message
            })}
    }
}
</script>