<template>
<section class="section pb-0 mb-4" id="services">

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card public-profile border-0 rounded shadow no-margin" style="z-index: 1;">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-4 text-md-start">
                                <!--<img src="images/client/05.jpg" class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="">--> 
                                <div class="about-details key-feature bg-light">
                                    <div class="media-body content">
                                        <h6 class="title mb-2">Personal Details</h6>
                                        <div class="bor-bottom mt-2 mb-3"></div>
                                        <p class="text-muted mb-2 font-14" v-for="detail in AboutMe.personalDetails" :key="detail.id">
                                            <a href="javascript:void(0)" class="text-black">{{detail.label}}: </a> {{detail.values}}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-9 col-md-8">
                                <div class="row align-items-end">
                                    <div class="col-md-12 text-md-start mt-4 mt-sm-0">
                                        <h4 class="heading me-2">I Am <span id="TypedData" class="element text-primary" :data-elements="AboutMe.presentation.short.Iam.list"></span>
                                            <span id="typed" class="text-primary"></span>
                                        </h4>
                                        <p class="text-light-muted mt-2">{{AboutMe.presentation.short.presentationText}}</p>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <div class="container-title text-center mb-4 pb-2">
                    <div class="titles">
                        <h2 class="title text-capitalize mb-4">{{Pages.info.title}}</h2>
                        <p class="pera-title para-desc-600 text-light-muted mb-0 mx-auto">{{Pages.info.phrase}}</p>
                        <span/>
                    </div>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
        <div class="row">
            <div :class="collumns[index] + 'mt-4 pt-2'" v-for="(page, index) in Pages.links" :key="page.id" >
                <div class="feature-widget text-left rounded">
                    <div class="services-texts">
                        <h3 class="title mb-3">{{page.label}}</h3>
                        <p class="text-light-muted mb-4">{{page.text}}</p>
                        <nuxt-link :to="page.url" class="text-primary" >Read more <i class="mdi mdi-chevron-right"/></nuxt-link>
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
            type: Object,
            required: true
        },
    },
    mounted(){
        const pages = this.Pages.links
        const arrLen = pages.length
        const customLastRowSize = Math.round(arrLen % 3)
        const customLastRowClass = (customLastRowSize == 1) ? "col-lg-12 col-md-12 col-12" : "col-lg-6 col-md-6 col-12"
        const standardRowClass = "col-lg-4 col-md-6 col-12"

        this.collumns = pages.map((val,index) => (index >= (arrLen) - customLastRowSize) ? customLastRowClass : standardRowClass)
    }
})
</script>

<style>

</style>