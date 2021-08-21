<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <ArticleList :articlesList="articles" />
      </article>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import ArticleList from "@/components/Article/ArticleList";

export default Vue.extend({
    components: {
        ArticleList
    },
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug, {deep:true})
        .where({ home:true, draft: false })
        .sortBy('date', 'desc')
        .fetch()

        return {
            articles
        }
    }
});
</script>
