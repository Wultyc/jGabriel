<template>
<section class="section pb-0 mb-4" id="services">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <div class="container-title text-center mb-4 pb-2">
                    <div class="titles">
                        <h2 class="title text-capitalize mb-4">{{AboutMe.title}}</h2>
                        <p class="pera-title para-desc-600 text-light-muted mb-0 mx-auto">{{AboutMe.text.mainPhrase}}</p>
                        <span/>
                    </div>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
        <div class="row">
            <div :class="collumns[index] + 'mt-4 pt-2'" v-for="(page, index) in Pages" :key="page.id" >
                <div class="feature-widget text-left rounded">
                    <div class="services-texts">
                        <h3 class="title mb-3">{{page.label}}</h3>
                        <p class="text-light-muted mb-4">{{page.text}}</p>
                        <nuxt-link :to="page.url" class="text-primary">Read more <i class="mdi mdi-chevron-right"/></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>
</section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
    name: "AboutMe",
    data(){
        return {
            collumns: []
        }
    },
    props: {
        AboutMe: {
            type: Object,
            required: true
        },
        Pages: {
            type: Array,
            required: true
        },
    },
    mounted(){
        const pages = this.Pages.length
        const arrLen = pages
        const customLastRowSize = Math.round(arrLen % 3)
        const customLastRowClass = (customLastRowSize == 1) ? "col-lg-12 col-md-12 col-12" : "col-lg-6 col-md-6 col-12"
        const standardRowClass = "col-lg-4 col-md-6 col-12"

        this.collumns = pages.map((val,index) => (index >= (arrLen) - customLastRowSize) ? customLastRowClass : standardRowClass)
    }
})
</script>

<style>

</style>