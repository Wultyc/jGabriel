<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Project :project="project" :projectFiles="projectFiles"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Project from '@/components/Project/Project'

export default Vue.extend({
  component: {
    Project
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

