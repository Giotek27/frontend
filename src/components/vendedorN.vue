<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid"> 
                <nav class="navbar navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" >
                            <router-link :to="{name:'InicioPanelAdmin'}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-house" viewBox="0 0 16 16" >
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg> </router-link>      
                        </a>
                    </div>
                </nav>
               
                <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        
                    </template>
                </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav> 
            <b-navbar-nav class="ml-auto">
            
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <b-nav-item><li class="nav-item">      
                        <router-link :to="{name:'InicioPanelAdmin'}" class="nav-link active" aria-current="page" exact>Volver</router-link>
                    </li></b-nav-item>
                </ul>
                
                <b-nav-item><form class="d-flex">
                    <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="consultar por id" 
                    aria-label="search" 
                    id="inputConsultar"
                    >
                    <button class="btn btn-outline-light" type="submit" @click="consultarVendedorN">Consultar</button>
                </form></b-nav-item>
                </b-navbar-nav>
            </b-collapse>  
            
        </div>
    </nav>
    <div>
        <Tabla :v-for="usuario in usuarios" :dato="usuario"></Tabla>
    </div>
</div>

</template>

<script>
    import axios from 'axios';
    import Tabla from '@/components/Tabla.vue'


    //import Api2 from '../logic/Api2';
    export default {
        data() {
            return {
                //fields:['Nombre','cedula','correo','telefono','direccion','ciudad','Tipo_plastic','estado_plastic','cantidad_plastic'],
               
                usuarios: [{
                    nombre:"",
                    cedula:1234567,
                    correo:"",
                    telefono:1234567,
                    direccion:"",
                    ciudad:"",
                    Tipo_plastic:"",
                    estado_plastic:"",
                    cantidad_plastic:10
                }],
                usuariosnombre:[],

                mostrarusuarios:'',
            }
        },
        
            methods:{
                /*deleteusuario(id){
                let indexofArrayItem=this.usuarios.findIndex((i)=>i._id === id);
                axios.delete("https://backend54-7.herokuapp.com/borrarVendedorN/"+id).then(()=>console.log("El registro se ha eliminado"));
                this.usuarios.splice(indexofArrayItem,1);},*/
           consultarVendedorN(){    
                    this.peticion();
                    const entrada=document.getElementById("inputConsultar").value;
                    for (let usuario in this.usuarios) {
                        if(usuario.nombre == entrada){
                            this.usuariosnombre.push(usuario);
                        }
                    }
                    this.usuarios=this.usuariosnombre;
            },

            async peticion(){   

                await axios.get("https://backend54-7.herokuapp.com/vendedorConsulta").then((res)=>this.usuarios=res.data);
            } 
        },
        components: {
            Tabla
        }
}
</script>