<template>
  <div
    class="hero-container"
    :style="`height: ${screenHeight}px`"
    :class="{ 'loading-background': !loaded }"
  >
    <div class="sk-folding-cube" v-show="!loaded">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
    <div class="background slide-1" v-show="loaded">
      <div class="hero-text">
        <h1 class="main-header-mobile-text">
          We are <br />
          Digital Specialists
        </h1>
        <h2>
          We use insight, technology and creativity to keep brands and
          businesses relevant in an ever-changing world.
        </h2>
      </div>
      <div class="arrow-scroll-down">
        <i class="fas fa-chevron-down arrow" @click="scrollToView"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-banner",
  data() {
    return {
      screenHeight: 0,
      loaded: false,
      backgroundUrl: "https://www.platinumseed.com/img/bg-home-01-large.jpg"
    };
  },
  mounted() {
    this.screenHeight = window.innerHeight;

    let bannerDiv = document.getElementsByClassName("slide-1")[0];

    this.loaded = false;
    var image = new Image();
    let _this = this;

    image.onload = function() {
      _this.loaded = true;
      bannerDiv.style.backgroundImage = "url('" + _this.backgroundUrl + "')";
    };
    image.src = this.backgroundUrl;

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  watch: {
    screenHeight(val) {
      return val;
    }
  },
  methods: {
    scrollToView() {
      let scrollToDiv = document.getElementById("slide-2");
      return scrollToDiv.scrollIntoView({ behavior: "smooth" });
    },
    onResize() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-container {
  color: #fff;
  width: 100%;
  .background {
    .arrow-scroll-down {
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      .arrow {
        animation: bounce 2s infinite;
        font-size: 30px;
      }
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
