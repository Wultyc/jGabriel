<template>
  <Certifications :Certifications="certifications"/>
</template>

<script>
import Vue from "vue";
import Certifications from "@/components/Certifications"

export default Vue.extend({
  components: {
    Certifications
  },
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const certifications = await $content("aboutme", "certifications").fetch();
    return { certifications };
  }
});
</script>