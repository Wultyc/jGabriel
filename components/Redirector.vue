<template>
    <div>Hello</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
    name: "Redirector",
    props: {
        routesList: {
            type: Object,
            required: true
        },
        routeId: {
            type: String,
            default: "home"
        },
    },

    mounted(){
        const route:any = this.routesList.routes.find((e:any) => e.id == this.routeId) ?? {url: '/', local: true}
        if(route.local == true){
            this.$router.push(route.url)
        } else {
            window.location.href = route.url
        }
    },
})
</script>

<style>

</style>