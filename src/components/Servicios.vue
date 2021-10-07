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
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">      
                <router-link to="/" class="nav-link active" aria-current="page" exact>Volver</router-link>
            </li>
            <li class="nav-item">
                <b-nav-item-dropdown text="Personalizar tabla" right>
                    <b-form-group label="Table Options" label-cols-lg="2" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox v-model="striped" :aria-describedby="ariaDescribedby" inline>Striped</b-form-checkbox>
                        <b-form-checkbox v-model="bordered" :aria-describedby="ariaDescribedby" inline>Bordered</b-form-checkbox>
                        <b-form-checkbox v-model="borderless" :aria-describedby="ariaDescribedby" inline>Borderless</b-form-checkbox>
                        <b-form-checkbox v-model="outlined" :aria-describedby="ariaDescribedby" inline>Outlined</b-form-checkbox>
                        <b-form-checkbox v-model="small" :aria-describedby="ariaDescribedby" inline>Small</b-form-checkbox>
                        <b-form-checkbox v-model="hover" :aria-describedby="ariaDescribedby" inline>Hover</b-form-checkbox>
                        <b-form-checkbox v-model="dark" :aria-describedby="ariaDescribedby" inline>Dark</b-form-checkbox>
                        <b-form-checkbox v-model="fixed" :aria-describedby="ariaDescribedby" inline>Fixed</b-form-checkbox>
                        <b-form-checkbox v-model="footClone" :aria-describedby="ariaDescribedby" inline>Foot Clone</b-form-checkbox>
                        <b-form-checkbox v-model="noCollapse" :aria-describedby="ariaDescribedby" inline>No border collapse</b-form-checkbox>
                    </b-form-group>
                </b-nav-item-dropdown>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="consultar por id" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Consultar</button>
        </form>
        </div>
    </div>
    
    </nav>
    </div>
</template>