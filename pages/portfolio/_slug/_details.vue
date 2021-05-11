<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Project v-if="details == 'index'" :project="project"/>
        <ProjectDetails v-else :project="project"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Project from '@/components/Project'
import ProjectDetails from '@/components/ProjectDetails'

export default Vue.extend({
  component: {
    Project,
    ProjectDetails
  },
  async asyncData({ $content, params }) {

    const slug = params.slug
    const details = params.details

    const project = await $content("portfolio", params.slug, params.details).fetch();

    return { project , slug, details };
  }
});
</script>

