<template>
    <Redirector :routesList="routesList"/>
</template>

<script>
import Vue from 'vue'
import Redirector from "@/components/Redirector.vue"

export default Vue.extend({
  component: {
      Redirector
  },

  async asyncData({ $content, params }) {
    const routesList = await $content("redirect", "routes").fetch();
    return { routesList };
  }

});
</script>