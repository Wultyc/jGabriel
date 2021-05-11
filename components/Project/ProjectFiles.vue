<template>
    <!-- Blog STart -->
    <div class="sidebar">
        <div class="card blog blog-detail border-0 shadow rounded">
            <div class="card-body content">
                <h3>Pages</h3>
                <ul>
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
import Project from '@/models/Project'

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
    mounted(){
        this.projectFiles.forEach(element => {

            if(element.path.substring(element.path.length-5) == "index"){
                this.homePath = element.path.substring(0,element.path.length-5)
            } else {
                this.files.push( new Project(
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