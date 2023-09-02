import axios from "axios";

export const obtenerTokenFachada= async(bodyUsuario)=>{
    return await obtenerToken(bodyUsuario);
}

const obtenerToken=async(bodyUsuario)=>{
    console.log(bodyUsuario.tiempo)
    return axios.get('http://localhost:8082/API/v1.0/Autorizacion/tokens',bodyUsuario).then(r=>r.data)
}