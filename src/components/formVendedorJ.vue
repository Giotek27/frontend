<template>
<div>
    <form @submit.prevent="enviarBackendN">
        <label>Nombre:</label>
        <input type="text" v-model="datos.nombre"><br>
        <label>Nit:</label>
        <input type="number" v-model="datos.Nit"><br>
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
        <label>Cantidad de Plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic"><br>
        <label>Estado de el plastico:</label>
        <input type="text"  v-model="datos.estado_plastic"><br>
        
        <button>Enviar</button>
       <div>
        <router-link class="btn-danger" :to="{name:'vendedoresjuridicos'}">Regresar</router-link>
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
                  Nit:1234567,
                  correo:"correo@example.com",
                  telefono:1234567,
                  direccion:"calle falsa 123",
                  ciudad:"Bogota",
                  Tipo_plastic:"papel",
                  cantidad_plastic:10,
                  estado_plastic:"bueno"
                  
              }
          }
        },
        methods:{
            enviarBackendN(){
                axios.post("https://backend54-7.herokuapp.com/creacionVendedorjuridico",this.datos).then(()=>alert("Producto creado"));
            }
        } 
    }  
</script>