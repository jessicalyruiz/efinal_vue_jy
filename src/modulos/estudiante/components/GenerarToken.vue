<template>
<div class="container">
    <div class="contenido">
  <label for="semilla">Semilla</label>
  <input type="text" id="semilla" v-model="semilla"> 

  <label for="tiempo">Tiempo Vigencia</label>
  <input type="number" id="tiempo" v-model="tiempo"> 

  <label for="token">Token</label>
  <input class="tokenText" type="text" id="token" v-model="token"> 

  <button @click="generar">Generar</button>
  </div>
  </div>
</template>

<script>
import {obtenerTokenFachada} from '../helpers/TokenCliente.js'
export default {
    data(){
        return{
            semilla:"",
            tiempo:"",
            token:"",
        }
    },
    methods:{
        async generar(){
            console.log("boton generar")
            const usuario={
                        userName:"jessi",
                        password:"1234",
                        tiempo:this.tiempo,
                        semilla:this.semilla
            }
            console.log(this.semilla)
            console.log(this.tiempo)
          this.token= await obtenerTokenFachada(usuario)

        }
    }

}
</script>

<style>

</style>