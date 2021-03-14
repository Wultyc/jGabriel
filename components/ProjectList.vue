<template>
    <!-- Blog STart -->
    <!-- Blog STart -->
    <section class="section">
        <div class="container">
            <div class="row">
                <ul class="col container-filter list-unstyled categories-filter text-center mb-0" id="filter">
                    <li class="list-inline-item">
                        <a class="categories border d-block text-dark rounded active" data-filter="*">All</a>
                    </li>
                    <li class="list-inline-item" v-for="category in settings.categories" :key="category">
                        <a class="categories border d-block text-dark rounded" :data-filter="'.'+category">{{category}}</a>
                    </li>
                </ul>
            </div>

            <div class="row projects-wrapper">
                <div :class="'col-lg-4 col-md-6 col-12 mt-4 pt-2 ' + project.category" v-for="project in projects" :key="project.title">
                    <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                        <div class="card-body p-0">
                            <img :src="'images/' + project.hero" class="img-fluid" alt="work-image">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <h5 class="mb-0"><a :href="project.url" class="text-white title">{{project.title}}</a></h5>
                                <h6 class="text-light tag mb-0">{{project.category}}</h6>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-12 mt-4 pt-2" v-if="fullList == false">
                    <div class="text-center">
                        <a href="javascript:void(0)" class="btn btn btn-primary rounded">See More <i class="mdi mdi-chevron-right"></i></a>
                    </div>
                </div><!--end col-->

            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Blog End -->
</template>

<script>
import Vue from 'vue'
import Project from '@/models/Project'

export default Vue.extend( {
    name: "ProjectList",
    data(){
        return {
            projects: []
        }
    },
    props: {
        settings: {
            type: Object,
            required: true
        },
        projectsList: {
            type: Array,
            required: true
        },
        fullList: {
            type: Boolean,
            default: true
        },
    },
    mounted(){
        this.projectsList.forEach(element => {
            this.projects.push( new Project(
                element.title,
                element.path,
                element.date,
                element.hero,
                element.banner,
                element.role,
                element.repo,
                element.startdate,
                element.enddate,
                element.technologies,
                element.logo,
                element.summary,
                element.tags,
                element.category,
                element.draft
            ))
        });
    }
})
</script>

<style>

</style>