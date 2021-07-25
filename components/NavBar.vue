<template>
    <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
        <div class="container">
                <!-- Logo container-->
                <nuxt-link :class="navBarStyle.logo" :to="'/'">{{ projectName }}</nuxt-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button><!--end button-->

                <div class="collapse navbar-collapse navigation" id="navbarCollapse">
                    <ul id="navbar-navlist" :class="navBarStyle.pageList">
                        <li class="nav-item" v-for="link in internalPages" :key="link.name">
                            <nuxt-link class="nav-link" :to="link.url">{{link.name}}</nuxt-link>
                        </li>
                        <li class="nav-item" v-for="link in externalPages" :key="link.name">
                            <a class="nav-link" target="_blank" :href="link.url">{{link.name}}</a>
                        </li>
                    </ul>

                    <ul class="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                        <li class="list-inline-item me-2" v-for="link in links" :key="link.name"><a target="_blank" :href="link.url"><i :class="link.icon"></i></a></li>
                    </ul>
                    
                </div> 
            </div><!--end container-->
    </nav><!--end navbar-->
</template>

<script>
import Vue from 'vue'
import { EnvParams } from '../models/EnvParams'

export default Vue.extend( {
    name: "NavBar",
    props: {
        isHome: {
            default: false
        },
    },
    data(){
        return {
            projectName: null,
            internalPages: null,
            externalPages: null,
            links: null,
            navBarStyle: {logo: "", pageList: ""},
        }
    },
    mounted(){
        const envData = new EnvParams()
        this.projectName = envData.projectName,
        this.internalPages = envData.internalPages.filter((l) => l.showOnNavBar),
        this.externalPages = envData.externalPages.filter((l) => l.showOnNavBar),
        this.links = envData.socialLinks.filter((l) => l.showOnNavBar)

        if(this.isHome == true){
            this.navBarStyle = {logo: "logo navbar-brand", pageList: "navbar-nav navbar-nav-link ms-auto"}
        } else {
            this.navBarStyle = {logo: "logo", pageList: "navbar-nav ms-auto"}
        }

    }
})
</script>

<style>

</style>