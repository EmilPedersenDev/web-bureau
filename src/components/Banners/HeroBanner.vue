<template>
  <div class="hero-container" :style="`height: ${screenHeight}px`">
    <div class="background">
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
      screenHeight: 0
    };
  },
  mounted() {
    this.screenHeight = window.innerHeight;
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
