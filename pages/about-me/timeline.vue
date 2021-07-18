<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <LifeEvents :lifeEvents="life"/>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Event from '@/models/Event'
import LifeEvents from '@/components/LifeEvents'

export default Vue.extend({
  components: {
    LifeEvents,
  },
  data(){
    return {
      lifeEvents: Event
    }
  },
  async asyncData({ $content, params }) {
    const life = await $content("aboutme", "events").fetch();
    return { life };
  }
});
</script>
