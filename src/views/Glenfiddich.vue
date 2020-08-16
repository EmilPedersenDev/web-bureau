<template>
  <example-of-work :products="products" :screenHeight="screenHeight">
    <template slot="main-header-text">
      <h3 class="eyebrow">Case study</h3>
      <h1 class="big-header main-header-mobile-text">Glenfiddich Whisky</h1>
      <h2>
        Using biometric technology to create unique whisky cocktails.
      </h2>
    </template>
    <template slot="main-img">
      <img
        v-show="loaded"
        src="https://api.platinumseed.com/wp-content/uploads/2017/08/Work_Glenfiddich_Cover-1800x1022.jpg"
        alt="South African young rapper"
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
          The world’s most awarded single malt, Glenfiddich, has always been a
          pioneer. Glenfiddich demonstrated its independent spirit yet again,
          launching The Glenfiddich Independent Bar in Johannesburg. However,
          the intention was so much more than just another bar. It was about
          creating a space which would redefine the whisky-drinking experience.
          We developed an interactive sound installation, which utilised
          biometric technology tocreate unique whisky cocktails based on the
          characteristics of the individual voice.
        </p>
        <p class="type col-12 col-xl-2 inside-text-content eyebrow">
          Experiential, Development, CRM
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
      products: globalMixin.glenfiddichProducts,
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
