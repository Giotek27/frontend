<template>
<div>
    <form @submit.prevent="enviarBackendN">
        <label>Nombre:</label>
        <input type="text" v-model="datos.nombre"><br>
        <label>Cedula:</label>
        <input type="number" v-model="datos.cedula"><br>
        <label>Correo:</label>
        <input type="text"  v-model="datos.correo"><br>
        <label>telefono:</label>
        <input type="number"  v-model="datos.telefono"><br>
        <label>Direccion:</label>
        <input type="text"  v-model="datos.direccion"><br>
        <label>Ciudad:</label>
        <input type="text"  v-model="datos.ciudad"><br>
        <label>Tipo plastico:</label>
        <input type="text"  v-model="datos.Tipo_plastic"><br>
        <label>Estado de el plastico:</label>
        <input type="text"  v-model="datos.estado_plastic"><br>
        <label>Cantidad de Plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic"><br>
        <button>Enviar</button>
       <div>
        <router-link class="btn-btn-danger" :to="{name:'vendedoresnaturales'}">Regresar</router-link>
    </div>
    </form>
    
</div>
     
</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              datos:{
                  nombre:"Pepito",
                  cedula:1234567,
                  correo:"correo@example.com",
                  telefono:1234567,
                  direccion:"calle falsa 123",
                  ciudad:"Bogota",
                  Tipo_plastic:"papel",
                  estado_plastic:"bueno",
                  cantidad_plastic:10
              }
          }
        },
        methods:{
            enviarBackendN(){
                axios.post("https://backend54-7.herokuapp.com/creacionVendedor",this.datos).then(()=>alert("Producto creado"));
            }
        } 
    }  
</script>