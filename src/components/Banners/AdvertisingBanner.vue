<template>
  <banner :section="section" :screenHeight="screenHeight" :loaded="loaded">
    <div class="sk-folding-cube" v-show="!loaded">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>

    <div
      class="background"
      :class="section"
      :style="getBackgroundUrl"
      v-show="loaded"
    >
      <slot name="background-text"></slot>
      <slot name="router-link-bank"></slot>
    </div>
  </banner>
</template>

<script>
export default {
  name: "advertising-banner",
  props: {
    backgroundUrl: {
      type: Object
    },
    section: {
      type: String
    }
  },
  data() {
    return {
      screenHeight: 0,
      loaded: false
    };
  },
  watch: {
    screenHeight(val) {
      return val;
    }
  },
  mounted() {
    this.screenHeight = window.innerHeight;

    let bannerDiv = document.getElementsByClassName(this.backgroundUrl.div)[0];

    this.loaded = false;
    var image = new Image();
    let _this = this;

    image.onload = function() {
      _this.loaded = true;
      bannerDiv.style.backgroundImage =
        "url('" + _this.backgroundUrl.url + "')";
    };
    image.src = this.backgroundUrl.url;

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  computed: {
    getBackgroundUrl() {
      return `background-image: url(${this.backgroundUrl})`;
    }
  },
  methods: {
    onResize() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  &.slide-2 {
    z-index: 6;
  }
  &.slide-3 {
    z-index: 5;
  }
  &.slide-4 {
    z-index: 4;
  }

  .background-text {
    height: 100%;
  }
}
</style>
