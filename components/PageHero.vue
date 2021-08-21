<template>
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100" :style="'background: url(/images/' + backgroundImage + ')center center;'">
        <div class="bg-overlay bg-overlay-white"></div>
         <div class="container" id="counter">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title text-black"> jGabriel </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb rounded mb-0 mt-3">
                                    <li class="breadcrumb-item active" aria-current="page">
                                        <nuxt-link :to="'/'" >Home</nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page" v-for="element in pagePath" :key="element.url">
                                        <nuxt-link :to="element.url" >{{element.label}}</nuxt-link>
                                    </li>
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
            pagePath: [] as  any,
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
    methods:{
        setPagePath: function () {
            this.pagePath = this.$route.fullPath
                                .split("/")
                                .filter(e => e != null && e != "")
                                .map((val, index, arr) => {
                                    return {
                                        label: val,
                                        url: '/' + arr.slice(0, index+1).join('/')
                                    }
                                })
        }
    },
    mounted(){
      this.setPagePath()
    },
    watch: {
    $route(to, from) {
      this.setPagePath()
    }
  }
})
</script>

<style>

</style>