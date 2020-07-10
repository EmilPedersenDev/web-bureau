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
      validator: size => {
        return ["sm", "md", "lg", "auto"].includes(size);
      }
    },
    section: {
      type: String
    },
    screenHeight: {
      type: Number
    }
  },
  computed: {
    classList() {
      return ["banner", this.size];
    },
    determineScreenHeight() {
      return `height: ${this.screenHeight}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
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
}
</style>
