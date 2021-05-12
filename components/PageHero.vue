<template>
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100" :style="'background: url(/images/' + backgroundImage + ')center center;'">
        <div class="bg-overlay bg-overlay-white"></div>
         <div class="container" id="counter">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title text-black"> Latest News or Blog </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb rounded mb-0 mt-3">
                                    <li class="breadcrumb-item"><nuxt-link to="/">jGabriel</nuxt-link></li>
                                    <!-- <li class="breadcrumb-item active" aria-current="page" v-for="element in pagePath" :key="element">{{element}}</li> -->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
    <!-- Hero End -->
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
    name: "PageHero",
    data(){
        return {
            pagePath: [],
        }
    },
    props: {
        path: {
            required: true
        },
        backgroundImage: {
            default: 'bg-hero.jpg'
        }
    },
})
</script>

<style>

</style>