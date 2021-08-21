<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Article :article="article" :articleFiles="articleFiles"/>
      </article>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Article from '@/components/Article/Article'

export default Vue.extend({
  component: {
    Article
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug, 'index').fetch();
    const articleFiles = await $content("articles", params.slug)
                                        .sortBy('title', 'asc')
                                        .fetch();

    return { article, articleFiles };
  }
});
</script>
