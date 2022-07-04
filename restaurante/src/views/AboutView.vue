<template>
  <div class="about">
    <ul>
      <li v-for='(prato, index) in refeicoes' :key="index">
      {{prato.strCategory}}
      <!-- <img :src="prato.strCategoryThumb" @click="adicionarCompra(prato)" alt=""> -->
      </li>
    </ul>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      refeicoes:[],
      user:null
    }
  },
  methods:{
    adicionarCompra(prato){
        firebase.database()
                .ref('/compras/'+ this.user.uid+'/')
                .push()
                .set(prato)
    }
  },
  mounted (){
    this.axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(
      res=>{
        console.log(res)
        this.refeicoes = res.data.categories
        }
      )
      this.user = firebase.auth().currentUser
  }
}
</script>
