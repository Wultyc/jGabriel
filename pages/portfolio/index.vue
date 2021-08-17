<template>
    <ProjectList :settings="settings" :projectsList="projects"/>
</template>

<script>
import Vue from "vue";
import ProjectList from '@/components/Project/ProjectList'

export default Vue.extend({
    components:{
        ProjectList
    },
    async asyncData({ $content, params }) {
        const projects = await $content('portfolio', {deep:true})
        .where({ home:true, draft: false })
        .sortBy('date', 'desc')
        .fetch()

        const settings = await $content('settings', 'projectsList')
        .fetch()

        return {
            projects,
            settings
        }
    }
});
</script>

<style>

</style>