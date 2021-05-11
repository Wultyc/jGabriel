<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Project v-if="details == 'index'" :project="project" :projectFiles="projectFiles"/>
        <ProjectDetails v-else :project="project" :projectFiles="projectFiles"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Project from '@/components/Project/Project'
import ProjectDetails from '@/components/Project/ProjectDetails'

export default Vue.extend({
  component: {
    Project,
    ProjectDetails
  },
  async asyncData({ $content, params }) {

    const slug = params.slug
    const details = params.details

    const project = await $content("portfolio", params.slug, params.details).fetch();
    const projectFiles = await $content("portfolio", params.slug)
                                        .sortBy('title', 'asc')
                                        .fetch();

    return { project, projectFiles , slug, details };
  }
});
</script>

