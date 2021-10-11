<template>
<div>
<body>
  <div class="row justify-content-center pt-5 mt-5 m-1 LoginAdmin" >
    
    <h1>{{ msg }}</h1>
    <div class="col-md-6 col-sm-8 col-xl-4 col-lg-5">
    <b-form @submit.prevent="buscarUsuario()" v-if="show" class="form-group mx-sm-4 pt-3">
    <b-card>
      <b-form-group
        id="input-group-1"
        label="Usuario"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Ingrese el usuario"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Ingrese su contraseña"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
      </b-card>
    </b-form>
    </div>
    
</div>
</body>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginAdmin',
  data(){
      return{
        form:{
            username:'',
            password:''
        },
        show:true,
        users:[]
      }
  },
  props: {
    msg: String
  },
  methods:{
      buscarUsuario(){
          console.log("Hola, se ejecutó");
          axios.get("https://backend54-7.herokuapp.com/consultarusuarios").then(res=>{
              
            this.users=res.data;
            console.log(this.users);

            this.users.forEach((value)=>{
                console.log(value.username);
                console.log(value.password);
                if(this.form.username === value.username){
                    console.log("El usuario existe");
                    if(this.form.password === value.password){
                        console.log("El password es correcto");
                        window.localStorage.setItem('autenticacion', 'ok');
                        this.$router.push({path:'/paneladministracion'});
                    }
                }
            });
          })
      }
  },
  beforeCreate(){
        
        var autenticacion =window.localStorage.getItem("autenticacion");
        console.log("autenticación está "+autenticacion);
        if(autenticacion === 'ok'){
            this.$router.push({path:'/paneladministracion'})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.form-control {
    background: rgb(235, 232, 232);
    border-style: solid;
    transition: 0.3s ease-in;
    outline: none;
    box-shadow: rgb(0, 0, 0);
}

.form-control:focus {
    background: none;
    box-shadow: none;
    outline: transparent;
}

.form-control::placeholder {
    color: rgb(47, 177, 159);
}
</style>