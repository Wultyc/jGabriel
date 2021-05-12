<template>
  <div>
    <!-- Loader -->
    <!-- <Loader /> -->
    <!-- Loader -->

    <!-- PageHero -->
    <PageHero path="pagePath" />
    <!-- PageHero -->

    <!-- Navbar Start -->
    <NavBar />
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
    <script src="/js/bootstrap.bundle.min.js"></script>

    <!-- Feather icon -->
    <script src="/js/feather.min.js"></script>

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
import PageHero from '../components/PageHero'

export default Vue.extend({
  components: {
    NavBar,
    Footer,
    ToUp,
    Loader,
    PageHero
  },
  data(){
    return {
        pagePath: [],
    }
  },
});
</script>

<style>
</style>
