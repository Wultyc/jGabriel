<template>
    <div>
        <footer class="footer bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <a href="javascript:void(0)" class="footer-logo text-black">Social Media</a>
                        <p class="para-desc mx-auto mt-5 text-black">Find me on social media</p>
                        <ul class="list-unstyled mb-0 mt-4 social-icon">
                            <li class="list-inline-item me-1" v-for="link in externalPages" :key="link.name"><a target="_blank" :href="link.url" class="rounded-circle"><i :class="link.icon"></i></a></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </footer><!--end footer-->
        <footer class="footer footer-bar bg-black">
            <div class="container text-foot text-center">
                <p class="mb-0 text-white-50">© {{year}} Jorge Gabriel Azevedo.</p>
            </div><!--end container-->
        </footer><!--end footer-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EnvParams } from '../models/EnvParams'
import { Link } from '@/models/Link'

export default Vue.extend( {
    name: "Footer",
    data(){
        return {
            externalPages: [new Link()],
            year: "",
            projectAuthor: ""
        }
    },
    mounted(){
        const envData = new EnvParams()
        this.externalPages = envData.socialLinks.filter((l) => l.showOnNavBar)
        this.year = new Date().getFullYear().toString()
        this.projectAuthor = ""
    }
})
</script>

<style>

</style>