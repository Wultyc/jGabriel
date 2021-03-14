<template>
  <section class="section pb-0" id="contact">
    <div class="container">
      <article>
        <nuxt-content :document="life" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const life = await $content("life", "events").fetch();

    console.log(life)

    return { life };
  }
};
</script>
