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
                        <NuxtLink :to="`${file.url}`">
                            {{writeTitle(file)}}
                        </NuxtLink>
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
import Compare from '@/utils/compare-files'
import WriteTitleWithIndentation from '~/utils/write-title-with-indentation'

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
    methods:{
        writeTitle(file){
            return WriteTitleWithIndentation(file.level, file.title)
        }
    },
    mounted(){
        this.ArticleFiles.forEach(element => {

            const article = new Article(
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
                )

            if(article.isHome){
                this.homePath = article.url
            } else {
                this.files.push( article )
            }
        });

        this.files.sort(Compare)
    }
})
</script>

<style>

</style>