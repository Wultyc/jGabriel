<template>
    <section class="section bg-white">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="container-title text-center mb-4 pb-2">
                        <div class="titles">
                            <h2 class="title text-capitalize mb-4">{{Certifications.info.title}}</h2>
                            <p class="pera-title para-desc-600 text-light-muted mb-0 mx-auto">{{Certifications.info.phrase}}</p>
                            <span></span>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2" v-for="cert in Certifications.certs" :key="cert.id">
                    <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                        <div class="card-body p-0">
                            <img :src="cert.img" class="img-fluid" :alt="cert.label">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <h5 class="mb-0"><a href="javascript:void(0)" class="text-white title">{{cert.label}}</a></h5>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

        </div>
        <!--end container -->
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
    name: "Certifications",
    data(){
        return {
        }
    },
    props: {
        Certifications: {
            type: Object,
            required: true
        },
    },
    mounted(){
        
    }
})
</script>

<style>

</style>