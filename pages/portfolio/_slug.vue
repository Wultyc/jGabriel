<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Project :project="project"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Project from '@/components/Project'

export default Vue.extend({
  component: {
    Project
  },
  async asyncData({ $content, params }) {
    const project = await $content("portfolio", params.slug).fetch();

    return { project };
  }
});
</script>

