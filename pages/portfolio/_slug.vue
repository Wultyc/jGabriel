<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <nuxt-content :document="project" />
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    console.log(project)

    return { project };
  }
});
</script>
