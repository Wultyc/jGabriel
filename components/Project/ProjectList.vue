<template>
    <!-- Blog STart -->
    <!-- Blog STart -->
    <section class="section">
        <script src="/js/filter.init.js"></script>
        <div class="container">
            <div class="row">
                <ul class="col container-filter list-unstyled categories-filter text-center mb-0" id="filter">
                    <li class="list-inline-item">
                        <a href="javascript:void(0)" class="categories tab-active border d-block text-dark rounded active" onclick="filterSelection('all')">All</a>
                    </li>
                    <li class="list-inline-item" v-for="category in settings.categories" :key="category">
                        <a href="javascript:void(0)" class="categories tab-active border d-block text-dark rounded" :onclick="`filterSelection('${category}')`">{{category}}</a>
                    </li>
                </ul>
            </div>

            <div class="row projects-wrapper">
                <div :class="'col-lg-4 col-md-6 col-12 mt-4 pt-2 filter-box ' + project.category" v-for="project in projects" :key="project.title">
                    <div class="item-box portfolio-box card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                        <div class="card-body p-0">
                            <img :src="'/images/' + project.hero" class="img-fluid" :alt="project.title">
                            <div class="overlay-work bg-dark"></div>
                            <div class="content">
                                <h5 class="mb-0"><nuxt-link :to="project.url" class="text-white title">{{project.title}}</nuxt-link></h5>
                                <h6 class="text-light tag mb-0">{{project.category}}</h6>
                            </div>
                            <div class="icons text-center">
                                <nuxt-link :to="project.url"  data-gallery="myGal" class="mfp-image text-primary work-icon bg-white d-inline-block rounded-pill">
                                    <i data-feather="link" class="fea icon-sm"></i>
                                </nuxt-link>
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
                element.level,
                element.order,
                element.draft
            ))
        });

    }
})
</script>

<style>

</style>