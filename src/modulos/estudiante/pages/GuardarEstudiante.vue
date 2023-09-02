<template>
  <IngresarDatosEstuVue @estudianteNuevo="newEstudiante($event)"/>
  <MostrarEstudiantesVue :estudiante="estudiante"/>
</template>

<script>

import IngresarDatosEstuVue from '../components/IngresarDatosEstu.vue'
import MostrarEstudiantesVue from '../components/MostrarEstudiantes.vue'
import {ingresarestudianteFachada} from '../helpers/EstudianteCliente.js'
export default {
    data(){
        return{
            estudiante:null,
        }
    },
components:{
    MostrarEstudiantesVue,
    IngresarDatosEstuVue
},

    methods:{
   async  newEstudiante(estudianteNuevoHijo){
      console.log("evento en padre ingresar estudiante")
        console.log(estudianteNuevoHijo)
      const myestudiante={
                "token":estudianteNuevoHijo.ctoken,
                "nombre": estudianteNuevoHijo.cNombre,
                "apellido": estudianteNuevoHijo.cApellido,
                "cedula": estudianteNuevoHijo.cCedula
      }
      this.estudiante=myestudiante;
      
      await ingresarestudianteFachada(myestudiante)
      console.log(myestudiante)
      window.alert("estudiante Ingresado")
    }
  }

}
</script>

<style>

</style>