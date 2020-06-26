<template>
  <div id="app">
    <app-navigation
      :class="{ 'start-nav': isStartSite }"
      :isStartSite="isStartSite"
    ></app-navigation>
    <!-- <div class="container-fluid"> -->
    <hero-banner v-show="isStartSite"></hero-banner>
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation";
import HeroBanner from "./components/HeroBanner";

export default {
  name: "app",
  components: {
    AppNavigation,
    HeroBanner
  },
  computed: {
    isStartSite() {
      return this.$route.path === "/";
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .start-nav {
    position: absolute;
    color: #fff;
  }
}
</style>
