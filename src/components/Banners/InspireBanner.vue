<template>
  <banner section="slide-4" size="auto" :loaded="true">
    <div
      class="inspire-banner-wrapper row"
      :class="{ 'background-wrapper': background }"
    >
      <div
        class="left-content no-mobile-animation"
        :class="{
          'col-md-12 col-lg-6': leftImg || leftText,
          'col-12': wholePageText,
        }"
        data-aos="fade-right"
      >
        <div
          class="inside-img left-inside-img dynamic-placement-content"
          v-if="leftImg"
        >
          <img :src="imgSrc" alt="" />
        </div>

        <div class="left-inside-text dynamic-placement-content" v-if="leftText">
          <slot name="eyebrow"> </slot>

          <slot name="header"></slot>

          <slot name="body-text-main"></slot>

          <slot name="footer-button"></slot>
        </div>
      </div>

      <div
        class="whole-page-text no-mobile-animation"
        :class="[isWholePageBigger ? 'col-md-8' : 'col-md-7']"
        v-if="wholePageText"
        data-aos="fade-right"
      >
        <slot name="eyebrow"> </slot>

        <slot name="header"></slot>

        <slot name="body-text-main"></slot>

        <slot name="footer-button"></slot>
      </div>

      <div
        class="right-content no-mobile-animation"
        :class="{
          'col-md-12 col-lg-6': rightText || rightImg,
        }"
        data-aos="fade-right"
      >
        <div
          class="inside-img right-inside-img dynamic-placement-content"
          v-if="rightImg"
        >
          <img :src="imgSrc" alt="" />
        </div>

        <div
          class="right-inside-text dynamic-placement-content"
          v-if="rightText"
        >
          <slot name="eyebrow"> </slot>

          <slot name="header"></slot>

          <slot name="body-text-main"></slot>

          <slot name="footer-button"></slot>
        </div>
      </div>
    </div>
  </banner>
</template>

<script>
export default {
  name: "inspire-Banner",
  props: {
    leftText: {
      type: Boolean,
      default: false,
    },
    rightText: {
      type: Boolean,
      default: false,
    },
    leftImg: {
      type: Boolean,
      default: false,
    },
    rightImg: {
      type: Boolean,
      default: false,
    },
    wholePageText: {
      type: Boolean,
      default: false,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    altText: {
      type: String,
      default: "",
    },
    background: {
      type: Boolean,
      default: false,
    },
    isWholePageBigger: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getBackgroundImg() {
      return `background-image: url(${this.imgSrc})`;
    },
  },
};
</script>
