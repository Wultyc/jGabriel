<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <Article  :article="Article" :articleFiles="ArticleFiles"/>
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

    const slug = params.slug
    const details = params.details

    const Article = await $content("articles", params.slug, params.details).fetch();
    const ArticleFiles = await $content("articles", params.slug)
                                        .sortBy('title', 'asc')
                                        .fetch();

    return { Article, ArticleFiles , slug, details };
  }
});
</script>

