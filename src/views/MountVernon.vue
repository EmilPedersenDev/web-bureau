<template>
  <example-of-work :products="products" :screenHeight="screenHeight">
    <template slot="main-header-text">
      <h3 class="eyebrow">Brand Website</h3>
      <h1 class="big-header main-header-mobile-text">Mount Vernon</h1>
      <h2>
        Experience the luxury and craft of a vineyard, rich in history.
      </h2></template
    >
    <template slot="main-img">
      <img
        v-show="loaded"
        src="https://api.platinumseed.com/wp-content/uploads/2016/02/01-Slide-Image-1800x1022.jpg"
        alt="Mount Vernon House"
        @load="isImgLoaded"
      />
      <spinner
        v-show="!loaded"
        :loaded="loaded"
        :screenHeight="screenHeight"
      ></spinner>
    </template>
    <template slot="description-text">
      <div class="row">
        <h1 class="information col-12 col-xl-2">Info</h1>
        <p class="text col-12 col-xl-8 inside-text-content">
          Mount Vernon is a family owned winery nestled at the foot of the fold
          mountains just outside of Stellenbosch in the Cape. The wine maker
          create wines with extreme attention to detail and is committed to
          excellence in his craft. The new online home for Mount Vernon is an
          eCommerce platform that tells the story of the brand and showcases the
          values of the brand through the wine they create.
        </p>
        <p class="type col-12 col-xl-2 inside-text-content eyebrow">
          SaS, Development
        </p>
      </div>
    </template>
  </example-of-work>
</template>

<script>
import globalMixin from "../common/globalMixin";
export default {
  mixins: [globalMixin],
  data() {
    return {
      products: globalMixin.mountVernonProducts,
      loaded: false,
      screenHeight: 0
    };
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
    this.screenHeight = window.innerHeight;

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    isImgLoaded() {
      this.loaded = true;
    },
    onResize() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>
