<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <LifeEvents :lifeEvents="life.experiences"/>
    </div>
    <div class="container">
      <Skills :skillsList="skills.skills"/>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Event from '@/models/Event'
import LifeEvents from '@/components/LifeEvents'
import Skills from '@/components/Skills'

export default Vue.extend({
  components: {
    LifeEvents,
    Skills
  },
  data(){
    return {
      lifeEvents: Event
    }
  },
  async asyncData({ $content, params }) {
    const life = await $content("life", "events").fetch();
    const skills = await $content("life", "skills").fetch();
    return { life, skills };
  }
});
</script>
