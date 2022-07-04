<template>
        <section class="vh-100">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/login.css">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4" style="margin-top:10px">
          <img src="../assets/DeliciasdoRioLogo.png" style="height: 60px;width: 60px;border: 2px solid #555; border-radius: 50%; margin-right: 10px;" alt="">
          <span class="h1 fw-bold mb-0">Delicias do Rio</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style="width: 40rem;">

            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Insira o seu Login</h3>

            <div class="form-outline mb-4">
              <input type="email" placeholder="E-mail" id="form2Example18" class="form-control form-control-lg" v-model="email" />
            </div>

            <div class="form-outline mb-4">
              <input type="password" placeholder="Palavra-Passe" id="form2Example28" class="form-control form-control-lg" v-model="password"/>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-primary btn-lg btn-block" @click="login" type="button">Login</button>
            </div>
          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left; height: 100px;">
      </div>
    </div>
  </div>
</section>
</template>
<script>
import firebase from 'firebase'
export default{
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
            res=>{
                console.log(res)
                alert('ta funcionando')
                }
            )
        }
    },
    created() {
      this.user = firebase.auth().currentUser;
    },
}
</script>