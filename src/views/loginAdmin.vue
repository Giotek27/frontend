<template>
<div>
    <loginAdmin msg="Iniciar sesion"/>
</div>
</template>

<script>
import LoginAdmin from '../components/LoginAdmin'
    //import axios from "axios";
    export default{
        name:'login',
        components:{
            LoginAdmin
        },
    }  
</script>

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
</style>
