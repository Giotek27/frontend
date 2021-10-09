<template>
<div>
<body>
    <div class="contenedor-principal">
    <div class="row justify-content-center pt-5 mt-5 m-1">
            <div class="col-md-6  col-sm-8 col-xl-4 col-lg-5 CajaLogin">
                <b-form @submit.prevent="buscaUsuarios()" action="">
                    <div class="form-group text-center pt-4">
                        <h1 class="text-light bg-dark">INICIAR SESIÓN</h1>
                    </div>
                    <div class="form-group mx-sm-4 pt-3">
                        <input type="text" class="form-control" placeholder="Ingrese su Usuario" required='true'
                        :v-model="form"
                        >
                    </div>
                    <div class="form-group mx-sm-4 pb-3">
                        <input type="text" class="form-control" placeholder="Ingrese su Contraseña" required='true'
                        :v-model="form2"
                        >
                    </div>
                    <div class="form-group mx-sm-4 pb-2">
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</body>
</div>
</template>

<script>
    //import axios from "axios";
    export default{
        data(){
          return{
              datos:{   
              }
          }
        },
        methods:{
            buscaUsuarios(){
                console.log("se efecuta función");
            }
        } 
    }  
</script>
