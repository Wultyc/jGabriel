<template>
  <AboutMe :AboutMe="aboutme" :Pages="pages" />
</template>

<script>
import Vue from "vue";
import AboutMe from "@/components/AboutMe"

export default Vue.extend({
  components: {
    AboutMe
  },
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const aboutme = await $content("aboutme", "introduction").fetch();
    const pages = await $content("aboutme", "subpages").fetch();
    return { aboutme, pages };
  }
});
</script>