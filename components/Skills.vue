<template>
    <!-- Skill & CTA START -->
    <section class="cta-full">
        <div class="container">
            <div class="row position-relative">
                <div class="col-lg-12">
                    <div class="cta-full-img-box">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center mb-3">
                                <div class="container-title">
                                    <div class="titles">
                                        <h4 class="title title-line text-capitalize mb-4">Work Expertise</h4>
                                    </div>
                                    <p class="text-light-muted mx-auto width-max mb-0">During my carrear I worked with many tools. Here is a list of some I feal more confortble with.</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->

                        <div class="row align-items-center">

                            <div class="col-lg-3 col-6 mt-4 pt-2" v-for="skill in skills" :key="skill.id">
                                <div class="card explore-feature border-0 text-center bg-white p-3">
                                    <div class="card-body p-0">
                                        <div class="skill-icon rounded-circle shadow-lg d-inline-block">
                                            <img :src="'images/skills/' + skill.icon" alt="" class="img-fluid mx-auto">
                                        </div>
                                        <span class="badge skill-badge badge-light">{{skill.label}}</span>
                                    </div>
                                </div>
                            </div><!--end col-->

                        </div><!-- end row -->

                    </div> <!-- end about detail -->
                </div> <!-- end col -->        
            </div><!--end row-->
        </div><!--end container fluid-->
    </section><!--end section-->   
    <!-- Skill & CTA End -->
</template>

<script>
import Vue from 'vue'
import Skill from '@/models/Skill'

export default Vue.extend( {
    name: "Skills",
    data(){
        return {
            skills: []
        }
    },
    props: {
        skillsList: {
            type: Array,
            required: true
        },
    },
    mounted(){
        this.skillsList.forEach(element => {
            this.skills.push(new Skill(
                element.id,
                element.label,
                element.icon
            ))});
    }
})
</script>

<style>

</style>