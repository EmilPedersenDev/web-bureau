<template>
  <div id="app">
    <app-navigation
      :class="{ 'start-nav': isFullPageBackground }"
    ></app-navigation>
    <hero-banner v-show="isStartSite"></hero-banner>
    <router-view />
    <fotter></fotter>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
import HeroBanner from "./components/Banners/HeroBanner";
import Fotter from "./components/Fotter";

export default {
  name: "app",
  components: {
    AppNavigation,
    HeroBanner,
    Fotter
  },
  computed: {
    isFullPageBackground() {
      return (
        this.$route.path === "/" ||
        this.$route.path === "/contact" ||
        this.$route.path === "/about"
      );
    },
    isStartSite() {
      return this.$route.path === "/";
    }
  }
};
</script>

<style lang="scss">
#app {
  .start-nav {
    position: absolute;
    color: #fff;
  }
}
</style>
