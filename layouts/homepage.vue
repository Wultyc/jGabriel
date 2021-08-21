<template>
  <div>
    <!-- Loader -->
    <!-- <Loader /> -->
    <!-- Loader -->
    <!-- Navbar Start -->
    <NavBar :isHome="true"/>
    <!-- Navbar End -->

    <!-- Page Content Start -->
    <Nuxt />
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

    <!-- Slider -->
    <script src="/js/tiny-slider.js "></script>
    <script src="/js/tiny-slider-init.js "></script>

    <!-- MK Lightbox -->
    <script src="/js/mklb.js"></script>

    <!-- Contact -->
    <script src="/js/contact.js"></script>

    <!-- Counter init -->
    <script src="/js/counter.init.js"></script>

    <!-- Feather icon -->
    <script src="/js/feather.min.js"></script>

    <!-- Ripples -->
    <script src="/js/jquery.ripples-min.js"></script>
    <script src="/js/ripple.init.js"></script>

    <!-- Typed -->
    <script src="/js/typed.js"></script>
    <script src="/js/typed.init.js"></script>

    <!-- Switcher -->
    <script src="/js/switcher.js"></script>

    <!-- Main Js -->
    <script src="/js/app.js"></script>
  </div>
</template>

<script >
import Vue from "vue";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ToUp from "../components/ToUp";
import Loader from "../components/Loader";

export default Vue.extend({
  components: {
    NavBar,
    Footer,
    ToUp,
    Loader,
  }
});
</script>

<style>
</style>
