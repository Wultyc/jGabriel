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
    const aboutme = await $content("aboutme", "aboutme").fetch();
    const pages = await $content("aboutme", "pages").fetch();
    console.log({ aboutme, pages })
    return { aboutme, pages };
  }
});
</script>
