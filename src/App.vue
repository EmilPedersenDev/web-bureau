<template>
  <div id="app">
    <app-navigation
      :class="{ 'start-nav': isFullPageBackground }"
    ></app-navigation>
    <router-view />
    <bigeye-footer></bigeye-footer>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
import HeroBanner from "./components/Banners/HeroBanner";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    AppNavigation,
    HeroBanner,
    "bigeye-footer": Footer,
  },
  computed: {
    isFullPageBackground() {
      return (
        this.$route.path === "/" ||
        this.$route.path === "/contact" ||
        this.$route.path === "/about"
      );
    },
  },
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
