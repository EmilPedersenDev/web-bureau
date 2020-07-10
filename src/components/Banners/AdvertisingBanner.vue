<template>
  <banner :section="section" :screenHeight="screenHeight">
    <div class="background" :class="section" :style="getBackgroundUrl">
      <slot name="background-text"></slot>
    </div>
  </banner>
</template>

<script>
export default {
  name: "advertising-banner",
  props: {
    backgroundUrl: {
      type: String
    },
    section: {
      type: String
    }
  },
  data() {
    return {
      screenHeight: 0
    };
  },
  watch: {
    screenHeight(val) {
      return val;
    }
  },
  mounted() {
    this.screenHeight = window.innerHeight;
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
