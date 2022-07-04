<template>
<div>
  
<header class="div">
  <nav>
    <h2><a href="#" id="logo" class="nsei">Delicias do Rio</a></h2>
    <div class="btn-group btn-group-lg">
    <button class="btn btn-dark"><router-link to="/">Home</router-link></button>
    <button class="btn btn-dark"><router-link to="/about">About</router-link></button>
    <button class="btn btn-dark"><router-link to="/main">Teste</router-link></button>
    </div>
    <button class="btn btn-white"><router-link to="/pesquisa"><img src="./assets/160050.png" alt="" style="height: 60px; width: 60px;"></router-link></button>
    <router-link to="/carrinho"><img src="../src/assets/126510.png" style="height: 60px; width: 60px;" alt=""></router-link>
    <button class="btn btn-dark btn-lg btn-block"><router-link to="/login">Login</router-link></button>
  </nav>
  <router-view/>
</header>
<footer style="border-top:2px black solid">
        <div class="footer">
            <div class="mais_info">
                <img src="../src/assets/DeliciasdoRioLogo.png" alt="" id="logofinal">
                <div class="social-media">
                    <a href="#" style="width: 20px; height: 20px; margin: 10px">
                        <img src="../src/assets/124010.png" class="facebook" alt="">
                    </a>
                    <a href="#" style="width: 20px; height: 20px; margin: 10px;">
                        <img src="../src/assets/Instagram_icon.png.webp" class="facebook" alt="">
                    </a>
                </div>
                <p style="font-size: 16px;">Copyright © Delicias do Rio 2022</p>
            </div>
            <div class="mais_info">
                <h2 style="font-size: 24px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;" >Contatos</h2>
                <p style="margin: 5px; font-size: 16px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Morada: Rua do Serrado do Mar Bloco B4</p>
                <p style="margin: 5px;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Telefone: 291 940 189</p>
                <p style="margin: 5px;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Email: deliciasdorio@email.com</p>
            </div>
            <div class="mais_info">
                <h2 style="font-size: 24px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Restaurante</h2>
                <p style="margin: 5px 0;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Acerca</p>
                <p style="margin: 5px 0;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Parceiros</p>
                <p style="margin: 5px 0;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Encomendas</p>
            </div>
            <div class="mais_info">
                <h2 style="font-size: 24px; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Recursos</h2>
                <p style="margin: 5px 0;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Ajuda</p>
                <p style="margin: 5px 0;font-size: 16px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">Política de privacidade</p>
            </div>
        </div>
    </footer>
</div>

</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cabecalho {
  min-height:100vh;
  background-size:cover;
  background-attachment: fixed;
  display:flex;
  flex-direction:column;
}
.nsei {
      margin-bottom:0;
      flex:1;
      letter-spacing:3px;
      font-family:'Courier New', Courier, monospace;
      text-decoration: none;
}
#logo {
        color:black;
        text-transform:uppercase;
}
nav {
    padding:15px 35px;
  background-color: orange;
  display:flex;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
.buscacomida{
    background-color: rgba(236, 157, 12, 0.851);
}
</style>
