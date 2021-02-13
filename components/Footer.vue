<template>
    <div>
        <footer class="footer bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <a href="javascript:void(0)" class="footer-logo text-black">Queue</a>
                        <p class="para-desc mx-auto mt-5 text-black">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <ul class="list-unstyled mb-0 mt-4 social-icon" v-for="link in $store.state.links" :key="link.name">
                            <li class="list-inline-item mr-1"><a target="_blank" :href="link.url" class="rounded-circle"><i :class="link.icon"></i></a></li>
                        <!--<li class="list-inline-item mr-1"><a                  href="javascript:void(0)" class="rounded-circle"><i class="mdi mdi-linkedin"></i></a></li> -->
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </footer><!--end footer-->
        <footer class="footer footer-bar bg-black">
            <div class="container text-foot text-center">
                <p class="mb-0 text-white-50">© <script>document.write(new Date().getFullYear())</script> Queue. Design by <a href="javascript:void(0)" class="text-white-50">Zoyothemes</a></p>
            </div><!--end container-->
        </footer><!--end footer-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
    name: "Footer"
})
</script>

<style>

</style>