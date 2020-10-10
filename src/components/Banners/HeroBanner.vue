<template>
  <div class="hero-container">
    <div
      :style="`height: ${screenHeight}px`"
      :class="{ 'loading-background': !loaded }"
      class="background"
      v-show="loaded"
    ></div>
    <div class="hero-text">
      <p
        class="eyebrow-main-text no-mobile-animation"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        UNIFY
      </p>
      <h1
        class="main-header-mobile-text no-mobile-animation"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        We are <br />
        Digital Specialists.
      </h1>
      <h2
        class="header no-mobile-animation"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        We use insight, technology and creativity to keep brands and businesses
        relevant in an ever-changing world.
      </h2>
    </div>
    <div class="arrow-scroll-down">
      <i class="fas fa-chevron-down arrow" @click="scrollToView"></i>
    </div>
    <spinner
      v-show="!loaded"
      :loaded="loaded"
      :screenHeight="screenHeight"
    ></spinner>
  </div>
</template>

<script>
import globalMixins from "../../common/globalMixin";
export default {
  name: "hero-banner",
  mixins: [globalMixins],
  data() {
    return {
      screenHeight: 0,
      loaded: false,
      backgroundUrl: "https://www.platinumseed.com/img/bg-home-01-large.jpg",
    };
  },
  mounted() {
    this.screenHeight = window.innerHeight;

    let bannerDiv = document.getElementsByClassName("background")[0];

    this.loaded = false;

    globalMixins.imageOnLoad(bannerDiv, this.backgroundUrl).then((result) => {
      this.loaded = true;
    });

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  watch: {
    screenHeight(val) {
      return val;
    },
  },
  methods: {
    scrollToView() {
      let scrollToDiv = document.getElementById("slide-2");
      return scrollToDiv.scrollIntoView({ behavior: "smooth" });
    },
    onResize() {
      this.screenHeight = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  .background {
    animation: fadein 2s;
    position: relative;
  }
  .hero-text {
    padding-top: 60px;
    h1 {
      margin-top: 0px;
      margin-bottom: 20px;
    }
  }
}
</style>
