<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
        <div class="container">
                <!-- Logo container-->
                <a class="logo navbar-brand" href="#">{{ projectName }}</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span data-feather="menu" class="fea icon-md"></span>
                </button><!--end button-->

                <div class="collapse navbar-collapse navigation" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-link ml-auto">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/about-me">About Me</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/portfolio">Portfolio</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
                        </li>
                        <li class="nav-item" v-for="link in externalPages" :key="link.name">
                            <a class="nav-link" target="_blank" :href="link.url">{{link.name}}</a>
                        </li>
                    </ul>

                    <ul class="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                        <li class="list-inline-item" v-for="link in links" :key="link.name"><a target="_blank" :href="link.url"><i :class="link.icon"></i></a></li>
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
    props: [],
    data(){
        return {
            projectName: null,
            externalPages: null,
            links: null
        }
    },
    mounted(){
        const envData = new EnvParams()
        this.projectName = envData.projectName,
        this.externalPages = envData.externalPages.filter((l) => l.showOnNavBar),
        this.links = envData.socialLinks.filter((l) => l.showOnNavBar)

    }
})
</script>

<style>

</style>