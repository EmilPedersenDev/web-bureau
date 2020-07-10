<template>
  <banner section="slide-4" size="auto" :loaded="true">
    <div
      class="inspire-banner-wrapper row"
      :class="{ 'background-wrapper': background }"
    >
      <div
        class="left-content"
        :class="{
          'col-md-12 col-lg-6': leftImg || leftText,
          'col-12': wholePageText
        }"
      >
        <div
          class="inside-img left-inside-img dynamic-placement-content"
          v-if="leftImg"
        >
          <img
            src="https://titusklein.com/user/pages/01.home/home-image3.jpg"
            alt=""
          />
        </div>

        <div class="left-inside-text dynamic-placement-content" v-if="leftText">
          <slot name="eyebrow"> </slot>

          <slot name="header"></slot>

          <slot name="body-text-main"></slot>

          <slot name="footer-button"></slot>
        </div>
      </div>

      <div class="whole-page-text col-md-7" v-if="wholePageText">
        <slot name="eyebrow"> </slot>

        <slot name="header"></slot>

        <slot name="body-text-main"></slot>

        <slot name="footer-button"></slot>
      </div>

      <div
        class="right-content"
        :class="{
          'col-md-12 col-lg-6': rightText || rightImg
        }"
      >
        <div
          class="inside-img right-inside-img dynamic-placement-content"
          v-if="rightImg"
        >
          <img
            src="https://titusklein.com/user/pages/01.home/home-image3.jpg"
            alt=""
          />
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
      default: false
    },
    rightText: {
      type: Boolean,
      default: false
    },
    leftImg: {
      type: Boolean,
      default: false
    },
    rightImg: {
      type: Boolean,
      default: false
    },
    wholePageText: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: ""
    },
    background: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getBackgroundImg() {
      return `background-image: url(${this.imgSrc})`;
    }
  }
};
</script>
