<template>
    <Presentation :homeData="data" />
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
        const data = await $content("homepage", "home").fetch();
        return { data };
    }
});
</script>

<style>

</style>