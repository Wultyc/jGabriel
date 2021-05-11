<template>
    <!-- Blog STart -->
    <section class="section">
        <div class="container">
            <div class="row">
                <!-- BLog Start -->
                <div class="col-lg-8 col-md-6">
                    <article class="card blog blog-detail border-0 shadow rounded">
                        <img :src="'/images/' + article.image" class="img-fluid rounded-top" alt="">
                        <div class="card-body content">
                            <h1>{{article.title}}</h1>
                            <nuxt-content :document="article" />
                        </div>
                    </article>
                </div>
                <!-- Blog End -->

                <!-- START SIDEBAR -->
                <div class="col-lg-4 col-md-6 col-12 mt-4 mb-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="sticky-sidebar">
                        <div class="card blog blog-detail border-0 shadow rounded">
                            <div class="card-body content">
                                <h3>Table of contents</h3>
                                <ul>
                                    <li v-for="link of article.toc" :key="link.id">
                                    <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
                <!-- END SIDEBAR -->

            </div><!--end row-->
        </div><!--end container-->
    </section>
    <!-- Blog End -->
</template>

<script>
import Vue from 'vue'

export default Vue.extend( {
    name: "Article",
    props: {
        article: {
            type: Object,
            required: true
        },
    },
    mounted(){}
})
</script>

<style>

</style>