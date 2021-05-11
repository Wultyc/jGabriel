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
                    </div><!--end row-->
                </div><!--end col-->

                <div class="col-lg-5 col-md-6 order-1 order-md-2">
                    <div class="port-images sticky-sidebar">
                        <ProjectFiles :projectFiles="projectFiles" />
                        <img :src="'/images/' + project.hero" class="img-fluid mx-auto d-block rounded mt-4" alt="img">
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
import ProjectFiles from './ProjectFiles'

export default Vue.extend( {
    name: "ProjectDetails",
    components:{
        ProjectFiles
    },
    props: {
        project: {
            type: Object,
            required: true
        },
        projectFiles: {
            type: Array,
            required: true
        }
    },
    mounted(){}
})
</script>

<style>

</style>