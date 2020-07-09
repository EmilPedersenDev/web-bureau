<template>
  <banner :section="section" :size="bannerSize">
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
      windowWdith: 0,
      bannerSize: "md"
    };
  },
  watch: {
    windowWdith(newWidth, oldWidth) {
      if (newWidth >= 768) {
        this.bannerSize = "md";
      } else {
        this.bannerSize = "sm";
      }
    }
  },
  mounted() {
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
      this.windowWdith = window.innerWidth;
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
