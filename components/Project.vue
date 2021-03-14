<template>
    <!-- Blog STart -->
    <section class="section">
        <div class="container">
            <div class="row">
                <!-- WORK START -->
                <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="row mr-lg-4">
                        <div class="col-lg-12">
                            <div class="work-details rounded">
                                <h4 class="title mb-3 border-bottom pb-3">Project Name : {{project.title}}</h4>
                                <nuxt-content :document="project"/>
                            </div>
                        </div><!--end col-->
                        
                        <div class="col-lg-12 mt-4 pt-2">
                            <div class="work-details bg-light rounded">
                                <h4 class="title border-bottom pb-3 mb-3">Project Info :</h4>
                                <ul class="list-unstyled mb-0">
                                    <li class="mt-3">
                                        <b>Techologies: </b>
                                        <span>{{project.technologies}}</span>
                                    </li>
                                    <li class="mt-3">
                                        <b>Status: </b>
                                        <span v-if="project.enddate">Completed</span>
                                        <span v-else>On Going</span>
                                    </li>
                                    <li class="mt-3">
                                        <b>Start Date: </b>
                                        <span>{{project.startdate}}</span>
                                    </li>
                                    <li class="mt-3" v-if="project.enddate">
                                        <b>End Date: </b>
                                        <span>{{project.enddate}}</span>
                                    </li>
                                    <li class="mt-3">
                                        <b>Repository: </b>
                                        <span><a :href="project.repo">GitHub</a></span>
                                    </li>
                                </ul>                          
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->

                <div class="col-lg-5 col-md-6 order-1 order-md-2">
                    <div class="port-images sticky-sidebar">
                        <img :src="'/images/' + project.hero" class="img-fluid mx-auto d-block rounded" alt="img">
                        <img :src="'/images/' + project.banner" class="img-fluid mx-auto d-block rounded mt-4" alt="img">
                    </div>
                </div><!--end col-->
            </div><!--end row-->
            
        </div><!--end container-->
    </section><!--end section-->
    <!-- Blog End -->
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
    name: "Project",
    props: {
        project: {
            type: Object,
            required: true
        },
    },
    mounted(){}
})
</script>

<style>

</style>