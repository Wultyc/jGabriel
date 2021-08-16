<template>
    <!-- Blog STart -->
    <div class="sidebar">
        <div class="work-details rounded">
            <h4 class="title border-bottom pb-3 mb-3">Pages</h4>
            <div class="content">
                <ul class="list-unstyled mb-0">
                    <li>
                        <NuxtLink :to="`${homePath}`">Home</NuxtLink>
                    </li>
                    <li v-for="file of files" :key="file.title">
                        <NuxtLink :to="`${file.url}`">{{file.title}}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Blog End -->
</template>

<script>
import Vue from 'vue'
import Article from '@/models/Article'

export default Vue.extend( {
    name: "ArticleFiles",
    data(){
        return {
            files: [],
            homePath: "" 
        }
    },
    props: {
        ArticleFiles: {
            type: Array,
            required: true
        },
    },
    mounted(){
        this.ArticleFiles.forEach(element => {

            if(element.path.substring(element.path.length-5) == "index"){
                this.homePath = element.path.substring(0,element.path.length-5)
            } else {
                this.files.push( new Article(
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
            }
        });
    }
})
</script>

<style>

</style>