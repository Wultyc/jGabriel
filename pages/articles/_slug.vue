<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>
