<template>
  <banner :section="section" :screenHeight="screenHeight">
    <div class="sk-folding-cube" v-show="!loaded">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>

    <div class="background" :class="classList" v-show="loaded"></div>

    <div class="hero-text no-mobile-animation" data-aos="fade-right">
      <p class="eyebrow-main-text">Our Work</p>
      <h1 class="main-header-mobile-text no-margin">
        {{ backgroundObj.title }}
      </h1>
      <h2 class="advertising-sub-header">{{ backgroundObj.subTitle }}</h2>
      <router-link
        slot="router-link-bank"
        :to="backgroundObj.route"
        class="top-link"
        >{{ routerLinkText }}
      </router-link>
    </div>
  </banner>
</template>

<script>
import globalMixins from "../../common/globalMixin";
export default {
  name: "advertising-banner",
  mixins: [globalMixins],
  props: {
    backgroundUrl: {
      type: Object,
    },
    backgroundObj: {
      type: Object,
    },
    routerLinkText: {
      Type: String,
    },
    section: {
      type: String,
    },
  },
  data() {
    return {
      screenHeight: 0,
      loaded: false,
    };
  },
  watch: {
    screenHeight(val) {
      return val;
    },
  },
  mounted() {
    this.screenHeight = window.innerHeight;
    let bannerDiv = document.getElementsByClassName(this.backgroundUrl.div)[0];

    this.loaded = false;

    globalMixins
      .imageOnLoad(bannerDiv, this.backgroundUrl.url)
      .then((result) => {
        this.loaded = true;
      });

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  computed: {
    classList() {
      return [this.section, !this.loaded && "loading-background"];
    },
  },
  methods: {
    onResize() {
      this.screenHeight = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  animation: fadein 2s;
  position: relative;
}

.hero-text {
  position: absolute;
  top: 0;
  justify-content: flex-end;
  padding-bottom: 40px;

  .background-text {
    height: 100%;
  }
}
</style>
