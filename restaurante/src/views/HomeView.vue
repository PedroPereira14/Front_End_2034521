<template>
<body style="margin: 0;">
    <header>
        <div class="grade">
            <div class="imagembackground">
                <div class="texto">
                    <h1 style="text-align: center; font-size: 120px ;font-family: Tahoma, sans-serif; margin: 0; -webkit-text-stroke: 2px black;">
                        Delicias do Rio
                    </h1>
                    <h2 style="text-align: center; font-size: 40px ;font-family: Tahoma, sans-serif; -webkit-text-stroke: 1px black; ">
                        Venha provar no melhor restaurante de comidas variadas
                    </h2>
                </div>
            </div>  
        </div>
    </header>
</body>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carrinho from '@/components/carrinho.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Carrinho
  }
}
</script>
