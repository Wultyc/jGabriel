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
                <div class="col-12">
                    <div class="client-review-slider">
                        <div class="tiny-slide" v-for="cert in Certifications.certs" :key="cert.id">
                            <div class="client-review rounded shadow m-2">
                                <div class="align-items-center justify-content-start justify-content-sm-center">
                                    <div class="position-relative">
                                        <img :src="cert.img" class="img-fluid rounded-top" :alt="cert.label">
                                    </div>
                                    <p class="pera-title text-light-muted mb-0 mt-2">{{cert.label}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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