<template>

  <div class="card"> 
        <div class="card-body">
            <table class="table table-dark" v-for="e in listaEstudiantes" :key="e.token">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Cedula</td>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{{}}</td>
                        <td>{{e.nombre}}</td>
                        <td>{{e.apellido}}</td>
                        <td>{{e.cedula}}</td>
                    </tr>

                </tbody>
            </table>
        </div>
	</div>
  
</template>

<script>
export default {
    props:{
        estudiante:{
            token:String,
            nombre:String,
            apellido:String,
            cedula:String
        }
    },
    data(){
        return{
            listaEstudiantes:[]
        }
    },
    mounted(){
        this.listaEstudiantes.push(this.estudiante)
    }

}
</script>

<style>

</style>