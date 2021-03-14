<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Article :article="article"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Article from '@/components/Article'

export default Vue.extend({
  component: {
    Article
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
});
</script>
