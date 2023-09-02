<template>
<div class="container">
    <div class="contenido">
  <label for="token">Token</label>
  <input type="text" id="token" v-model="token"> 

<label for="nombre">Nombre</label>
  <input type="text" id="nombre" v-model="nombre"> 

  <label for="apellido">apellido</label>
  <input type="text" id="toapellidoken" v-model="apellido"> 

  <label for="cedula">Cedula</label>
  <input type="text" id="cedula" v-model="cedula"> 

  <button @click="$emit('estudianteNuevo',{
                            cToken:token,
                            cCedula:cedula,
                            cNombre:nombre,
                            cApellido:apellido})">Guardar</button>
  </div>
  </div>
</template>

<script>
export default {

data(){
    return{
        token:"",
        nombre:"",
        apellido:"",
        cedula:""
    }
},
methods:{

}
}
</script>

<style>

</style>