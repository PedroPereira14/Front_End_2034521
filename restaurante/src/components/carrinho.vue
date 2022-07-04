 <template>
<div class="buscacomida">
        <h1 style="font-size:50px; font-family:'Courier New', Courier, monospace; color: black;">Lista de Compras: </h1>
        <ul style="list-style-type: none; display:flex; flex-flow: row wrap; align-items: flex-end; align-content: flex-end;">
        <li style="border:3px black solid; border-radius: 10%; margin: 10px;" v-for='(prato, index) in refeicoes' :key="index" >
        <div style="padding:20px; width: 300px;">
            <p style="font-size:40px; font-family:'Courier New', Courier, monospace; color: black;">{{prato.strMeal}}</p>
            <img :src="prato.strMealThumb" width="200" style="border-radius:50%; margin:10px; border:black solid 3px;" alt="">
            <button class="btn-danger btn-sm btn-block" @click="removeritemcarrinho(index)">Apagar</button>
        </div>
        </li>            
        </ul>
</div>

</template>
<script>
import firebase from "firebase"
export default{
    name:'carrinho',
    data(){
        return{
            user:[],
            user:null,
            refeicoes:[]
        }
    },
    methods:{
        removeritemcarrinho(prato){
        firebase.database()
        .ref("/compras/"+this.user.uid+"/"+prato)
        .remove()
        .then(()=>{
          alert("Refeicao retirada do Carrinho!")
          this.$router.push('/pesquisa')
          }
        )


    }
    },
    mounted(){
        this.user = firebase.auth().currentUser
        firebase.database().ref('/compras/'+ this.user.uid+'/').get().then((res)=>{this.refeicoes = res.val()})
    }
}
</script>