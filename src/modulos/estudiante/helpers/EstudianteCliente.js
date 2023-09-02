import axios from "axios";

export const ingresarestudianteFachada= async(bodyEstu)=>{
     await ingresarestudiante(bodyEstu);
}

const ingresarestudiante=async(bodyEstu)=>{
    console.log(bodyEstu)
    const header={
        "Authorization":"Bearer "+ bodyEstu.token
    }
    const myestudiante={
        "nombre": bodyEstu.nombre,
        "apellido": bodyEstu.apellido,
        "cedula": bodyEstu.cedula
}
     axios.post('http://localhost:8082/API/v1.0/Inscripcion/estudiantes',myestudiante, {headers:header}).then(r=>r.data)
}

