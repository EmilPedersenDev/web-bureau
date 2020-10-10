<template>
  <section :class="classList" :id="section" :style="determineScreenHeight">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {
    size: {
      type: String,
      default: "md",
      validator: (size) => {
        return ["sm", "md", "lg", "auto"].includes(size);
      },
    },
    section: {
      type: String,
    },
    screenHeight: {
      type: Number,
    },
    loaded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return ["banner", this.size, !this.loaded ? "loading-background" : ""];
    },
    determineScreenHeight() {
      return `height: ${this.screenHeight}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  &.sm {
    height: 522px;
  }
  &.md {
    height: 772px;
  }
  &.lg {
    height: 922px;
  }
  &.auto {
    height: 100%;
  }
  &.loading-background {
    position: relative;
    background: #f9f8f5;
    &:nth-child(odd) {
      background: #fff;
    }
  }
}
</style>
