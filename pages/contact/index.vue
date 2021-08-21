<template>
  <ContactForm />
</template>

<script>
import Vue from "vue";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm.vue"

export default Vue.extend({
  components: {
    PageHero,
    ContactForm,
  },
});
</script>

<style>
</style>