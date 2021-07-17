<template>
<!-- Hero Area -->
<div class="hero-area position-relative bg-half-120" :style="'background-image:url(' + homeData.page.hero.bg + ')'" id="home">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 align-items-center text-center">
                <div class="title-heading mt-4 pb-60">
                    <img :src="homeData.me.img" class="img-fluid rounded-circle" alt="">
                    <h1 class="heading font-36 text-white mt-4">{{homeData.me.phrase.main}}</h1>
                    <h6 class="designation mb-3 text-white">{{homeData.me.phrase.second}}</h6>
                    <div class="hero-btn mt-4 pt-2" v-for="link in homeData.me.links" :key="link.id">
                        <a :href="link.url" class="btn btn-primary rounded text-white mb-2">{{link.label}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
    layout: 'Presentation',
    props: {
        homeData: {
            type: Object,
            required: true
        },
    }
})
</script>

<style>

</style>
