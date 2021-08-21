<template>
    <!-- Blog STart -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 pb-2" v-for="article in articles" :key="article.title">
                    <div class="pad-right-left m-2">
                        <div class="blog-post rounded customer-testi">
                            <div class="position-relative">
                                <img :src="'/images/' + article.images" class="img-fluid rounded-top" alt="">
                            </div>
                            <div class="content pt-4 pb-4 p-3">
                                <h5><nuxt-link :to="article.url" class="title text-dark">{{article.title}}</nuxt-link></h5>
                                <div class="post-meta d-flex justify-content-between mt-3">
                                    <ul class="list-unstyled mb-0 d-flex justify-content-between">
                                        <li class="list-inline-item mr-2 mb-0 text-light-muted date"><i class="mdi mdi-calendar-edit mr-1"></i>{{article.date}}</li>
                                    </ul>
                                    <nuxt-link :to="article.url" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></nuxt-link>
                                </div>
                            </div><!--end content-->
                        </div><!--end blog post-->
                    </div>
                </div><!--end col-->

                <!-- PAGINATION START -->
                <!-- <div class="col-12">
                    <ul class="pagination justify-content-center mb-0">
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                    </ul>
                </div> -->
                <!-- PAGINATION END -->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Blog End -->
</template>

<script>
import Vue from 'vue'
import Article from '@/models/Article'

export default Vue.extend( {
    name: "ArticleList",
    data(){
        return {
            articles: []
        }
    },
    props: {
        articlesList: {
            type: Array,
            required: true
        },
    },
    mounted(){
        this.articlesList.forEach(element => {
            this.articles.push( new Article(
                element.title,
                element.path,
                element.date,
                element.image,
                element.categories,
                element.tags,
                element.authors,
                element.sources,
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