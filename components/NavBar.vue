<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
        <div class="container">
                <!-- Logo container-->
                <a class="logo navbar-brand" href="#">Queue</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span data-feather="menu" class="fea icon-md"></span>
                </button><!--end button-->

                <div class="collapse navbar-collapse navigation" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-link ml-auto">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="#home" to="/">Home</nuxt-link>
                        </li><!--end nav item-->
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="#about-me" to="/about-me">About Me</nuxt-link>
                        </li><!--end nav item-->
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="#portfolio" to="/portfolio">Portfolio</nuxt-link>
                        </li><!--end nav item-->
                        <li class="nav-item">
                            <nuxt-link class="nav-link" href="#contact" to="/contact">Contact</nuxt-link>
                        </li><!--end nav item-->
                    </ul>

                    <ul class="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                        <li class="list-inline-item mr-2"><a href="javascript:void(0)"><i class="mdi mdi-facebook"></i></a></li>
                        <li class="list-inline-item mr-2"><a href="javascript:void(0)"><i class="mdi mdi-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="javascript:void(0)"><i class="mdi mdi-instagram"></i></a></li>
                    </ul>
                    
                </div> 
            </div><!--end container-->
    </nav><!--end navbar-->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
    name: "NavBar",
    props: []
})
</script>

<style>

</style>