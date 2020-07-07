<template>
  <section :class="classList" :id="section">
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
    }
  },
  computed: {
    classList() {
      return ["banner", this.size];
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  &.sm {
    width: 100%;
    height: 522px;
  }
  &.md {
    width: 100%;
    height: 772px;
  }
  &.lg {
    width: 100%;
    height: 922px;
  }
  &.auto {
    width: 100%;
    height: 100%;
  }
}
</style>
