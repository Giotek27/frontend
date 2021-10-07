<template>
    <form @submit.prevent="actualizar">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="datos.nombre" id="nombre" ><br>
        <label>Cedula:</label>
        <input type="number" v-model="datos.cedula" id="cedula" ><br>
        <label>Correo:</label>
        <input type="text"  v-model="datos.correo" id="correo" ><br>
        <label>telefono:</label>
        <input type="number"  v-model="datos.telefono" id="telefono" ><br>
        <label>Direccion:</label>
        <input type="text"  v-model="datos.direccion" id="direccion" ><br>
        <label>Ciudad:</label>
        <input type="text"  v-model="datos.ciudad" id="ciudad"><br>
        <label>Tipo plastico:</label>
        <input type="text"  v-model="datos.Tipo_plastic" id="Tipo_plastic" ><br>
        <label>Estado de el plastico:</label>
        <input type="text"  v-model="datos.estado_plastic" id="estado_plastic" ><br>
        <label>Cantidad de Plastico:</label>
        <input type="number"  v-model="datos.cantidad_plastic" id="cantidad_plastic"><br>
        <button @click="actualizar">Enviar</button>
    </form>
</template>

<script>
    import axios from "axios";
    import Api from "../logic/Api"
    export default{
        data(){
          return{
              datos:{
                  nombre:"",
                  cedula:1234567,
                  correo:"",
                  telefono:1234567,
                  direccion:"",
                  ciudad:"",
                  Tipo_plastic:"",
                  estado_plastic:"",
                  cantidad_plastic:10
              },
                Actual: Object,
          }
        }, 
        created(){
            let apiURL=`https://backend54-7.herokuapp.com/buscavendedor/${this.$route.params.id}`;
            axios.get(apiURL).then((res)=>{
                this.datos=res.data;
            });
        },
        methods:{
            async actualizar() {
                const nombre = document.getElementById("nombre").value;
                const cedula = document.getElementById("cedula").value;
                const correo = document.getElementById("correo").value;
                const telefono = document.getElementById("telefono").value;
                const direccion = document.getElementById("direccion").value;
                const ciudad = document.getElementById("ciudad").value;
                const Tipo_plastic = document.getElementById("Tipo_plastic").value;
                const estado_plastic = document.getElementById("estado_plastic").value;
                const cantidad_plastic = document.getElementById("cantidad_plastic").value;
                this.Actual = {
                    nombre: nombre,
                    cedula: cedula,
                    correo: correo,
                    telefono: telefono,
                    direccion: direccion,
                    ciudad: ciudad,
                    Tipo_plastic: Tipo_plastic,
                    estado_plastic: estado_plastic,
                    cantidad_plastic: cantidad_plastic,

                };
                //console.log(this.Actual);
                await Api.update(this.inpConsulta, this.Actual);
                window.location.reload(true);
                },
        }
    } 
</script>