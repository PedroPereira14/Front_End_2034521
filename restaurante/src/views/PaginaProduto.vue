<template>
    <div class="buscacomida" v-for='(prato, index) in refeicoes' :key="index" style="display:flex; align-items: center; flex-direction: column;">
      <p style="font-size:50px; font-family:'Courier New', Courier, monospace; color: black; margin-top: 20px;">{{prato.strMeal}}</p>
    </div>
    <div class="buscacomida" v-for='(prato, index) in refeicoes' :key="index" style="display:flex; align-items: center;">
      <p style="font-size:20px; margin: 20px; color: black;">{{prato.strInstructions}}</p>
      <img :src="prato.strMealThumb" width="350" style="border-radius:20%; margin:10px; border:black solid 3px;"  alt="">
    </div>
    <div class="buscacomida" v-for='(prato, index) in refeicoes' :key="index" style="display:flex; align-items: center">
            <button class="btn btn-primary btn-lg" style="width:150px; margin-left: 85%; margin-bottom: 20px; margin-top: 20px;" @click="adicionarCompra(prato)">Comprar</button>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      refeicoes:['hamburguer', 'ovo frito'],
      user:null,
      pesquisa:"",
    }
  },
  methods:{
    adicionarCompra(prato){
        firebase.database()
                .ref('/compras/'+ this.user.uid+'/')
                .push()
                .set(prato)
                .then(()=>{
                   alert("O item selecionado foi para o carrinho");
                this.$router.push('/carrinho')
                })
    },
    pesquisadb(pesquisa){
        this.axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + pesquisa)
      .then(
      res=>{
        console.log(res)
        this.refeicoes = res.data.meals
        }
      )
    }
  },
  mounted (){
      //this.pesquisadb("")
      this.user = firebase.auth().currentUser
      this.axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.$route.params.produto)
      .then(
      res=>{
        console.log(res)
        this.refeicoes = res.data.meals
        }
      )
  }
}    
</script>