<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <Skills :skillsList="skills"/>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Skills from '@/components/Skills'

export default Vue.extend({
  components: {
    Skills
  },
  async asyncData({ $content, params }) {
    const skills = await $content("aboutme", "skills").fetch();
    return { skills };
  }
});
</script>
