<template>
    <Presentation :PersonalData="personalData" :HomeData="homeData" />
</template>

<script>
import Vue from "vue";
import Presentation from '@/components/Presentation.vue'

export default Vue.extend({
    layout: 'homepage',
    
    components: {
        Presentation
    },
    
    async asyncData({ $content, params }) {
        const personalData = await $content("aboutme", "introduction").fetch();
        const homeData = await $content("homepage", "home").fetch();
        return { personalData, homeData };
    }
});
</script>

<style>

</style>