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
import Project from '@/models/Project'
import Compare from '@/utils/compare-files'
import WriteTitleWithIndentation from '~/utils/write-title-with-indentation'

export default Vue.extend( {
    name: "ProjectFiles",
    data(){
        return {
            files: [],
            homePath: "" 
        }
    },
    props: {
        projectFiles: {
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
        this.projectFiles.forEach(element => {

            const project = new Project(
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
                )

            if(project.isHome){
                this.homePath = project.url
            } else {
                this.files.push( project )
            }
        });

        this.files.sort(Compare)
    }
})
</script>

<style>

</style>