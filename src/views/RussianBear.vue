<template>
  <example-of-work :products="products" :screenHeight="screenHeight">
    <template slot="main-header-text">
      <h3 class="eyebrow">Case study</h3>
      <h1 class="big-header main-header-mobile-text">Russian Bear</h1>
      <h2>
        Introducing the <em>#IAmNextSessions</em>, a search for South Africa’s
        next big rapper.
      </h2></template
    >
    <template slot="main-img">
      <img
        v-show="loaded"
        src="https://api.platinumseed.com/wp-content/uploads/2017/08/Work_RussianBear_Cover-1800x1022.jpg"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione
          dolores facilis dolorum libero, provident perspiciatis magni
          necessitatibus dolorem. Illo soluta unde labore eaque perferendis
          blanditiis error porro asperiores sit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste ratione dolores facilis dolorum
          libero, provident perspiciatis magni necessitatibus dolorem. Illo
          soluta unde labore eaque perferendis blanditiis error porro asperiores
          sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          ratione dolores facilis dolorum libero, provident perspiciatis magni
          necessitatibus dolorem. Illo soluta unde labore eaque perferendis
          blanditiis error porro asperiores sit!
        </p>
        <p class="type col-12 col-xl-2 inside-text-content eyebrow">
          Cms, Development
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
      products: globalMixin.russianBearProducts,
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
