<template>
  <banner :section="section" size="md">
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
  created() {
    // window.onload = event => {
    //   var body = document.body,
    //     html = document.documentElement;
    //   var height = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    //   );
    //   console.log("page is fully loaded", height);
    // };
  },
  computed: {
    getBackgroundUrl() {
      return `background-image: url(${this.backgroundUrl})`;
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
