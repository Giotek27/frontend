import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes=[
    {
        path:"/",
        name:"login",
        component:()=>import("../views/loginAdmin.vue")
    },
    {
        path:"/paneladministracion",
        name:"InicioPanelAdmin",
        component:()=>import("../views/InicioPanelAdmin.vue")
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
        path:"/editarvendedorj",
        name:"editarvendedorj",
        component:()=>import("../components/editarVendedorJ.vue")
    },
    
    {
        path:"/crearvendedorn",
        name:"crearvendedorn",
        component:()=>import("../components/formVendedorN.vue")
    },
    {
        path:"/crearvendedorj",
        name:"crearvendedorj",
        component:()=>import("../components/formVendedorJ.vue")
    },
    {
        path:"/crearservicios",
        name:"crearservicios",
        component:()=>import("../components/formservicios.vue")
    },
    {
        path:"/crearventas",
        name:"crearventas",
        component:()=>import("../components/formventas.vue")
    },
    {
        path:"/editarservicios",
        name:"editarservicios",
        component:()=>import("../components/editarservicios.vue")
    },
    {
        path:"/editarventas",
        name:"editarventas",
        component:()=>import("../components/editarventas.vue")
    },
    {
        path:"/servicioscompra",
        name:"servicioscompra",
        component:()=>import("../components/Serviciosclientes.vue")
    },

    
];

const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
});

export default router;