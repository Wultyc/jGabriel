<template>
  <div>
    <!-- Loader -->
    <!-- <Loader /> -->
    <!-- Loader -->

    <!-- PageHero -->
    <PageHero path="Error" />
    <!-- PageHero -->

    <!-- Navbar Start -->
    <NavBar />
    <!-- Navbar End -->

    <!-- Page Content Start -->
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <!-- Page Content End -->

    <!-- Footer Start -->
    <Footer />
    <!-- Footer End -->

    <!-- To up btn Start -->
    <ToUp />
    <!-- To up btn End -->

    <!-- Javascript -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/jquery.easing.min.js"></script>
    <script src="/js/scrollspy.min.js"></script>

    <!-- Magnific Js -->
    <script src="/js/isotope.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/magnific.init.js"></script>

    <!-- Slider Js -->
    <script src="/js/owl.carousel.min.js "></script>
    <script src="/js/owl.init.js "></script>

    <!-- Contact -->
    <script src="/js/contact.js"></script>

    <!-- Counter init -->
    <script src="/js/counter.init.js"></script>

    <!-- Feather icon -->
    <script src="/js/feather.min.js"></script>

    <!-- Typed -->
    <script src="/js/typed.js"></script>
    <script src="/js/typed.init.js"></script>

    <!-- Flickity Js -->
    <script src="/js/flickity.pkgd.min.js"></script>

    <!-- Main Js -->
    <script src="/js/app.js"></script>
  </div>
</template>

<script >
import Vue from "vue";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ToUp from "@/components/ToUp";
import Loader from "@/components/Loader";
import PageHero from '@/components/PageHero'

export default Vue.extend({
    components: {
    NavBar,
    Footer,
    ToUp,
    Loader,
    PageHero
    },
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
});
</script>

<style>
</style>
