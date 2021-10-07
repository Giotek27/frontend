import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes=[
    {
        path:"/",
        name:"InicioPanelAdmin",
        component:()=>import("../components/InicioAdmin.vue")
    },
    {
        path:"/vendedoresnaturales",
        name:"vendedoresnaturales",
        component:()=>import("../components/vendedorN.vue")
    },
    {
        path:"/vendedoresjuridicos",
        name:"vendedoresjuridicos",
        component:()=>import("../components/VendedorJ.vue")
    },
    {
        path:"/servicios",
        name:"servicios",
        component:()=>import("../components/Servicios.vue")
    },
    {
        path:"/ventas",
        name:"ventas",
        component:()=>import("../components/ventas.vue")
    },
    {
        path:"/editarvendedorn",
        name:"editarvendedorn",
        component:()=>import("../components/editarVendedorN.vue")
    },
    {
        path:"/consultarvendedorn",
        name:"consultarvendedorn",
        component:()=>import("../components/consultaVendedorN.vue")
    },
    {
        path:"/crearvendedorn",
        name:"crearvendedorn",
        component:()=>import("../components/formVendedorN.vue")
    }
];

const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
});

export default router;