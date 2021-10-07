import axios from 'axios';
const API="https://backend54-7.herokuapp.com/vendedorConsulta";

export default{
    getAll(){
        return axios.get(API);
    },
    create(todo){
        return axios.post(API, todo);
    },
    getOne(nombre){
        const API2=`${API}/${nombre}`;
        return axios.get(API2);
    },
    update(nombre,obj){
        const API2=`${API}/${nombre}`;
        return axios.put(API2,obj);
    },
    delete(nombre){
        const API2=`${API}/${nombre}`;
        return axios.delete(API2);
    }
};