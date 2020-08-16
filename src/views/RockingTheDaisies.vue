<template>
  <example-of-work :products="products" :screenHeight="screenHeight">
    <template slot="main-header-text">
      <h3 class="eyebrow">Case study</h3>
      <h1 class="big-header main-header-mobile-text">Rocking the Daisies</h1>
      <h2>
        Building brand advocacy and user-generated content.
      </h2></template
    >
    <template slot="main-img">
      <img
        v-show="loaded"
        src="https://api.platinumseed.com/wp-content/uploads/2016/02/home-rtd.jpg"
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
          South Africa’s biggest music festival, Rocking the Daisies, connected
          with us, looking to increase festival attendance, in order to ensure
          the ongoing success of the event. With little advertising budget, the
          objective was to focus on the use of social media to drive awareness
          and conversation. We determined that the optimal way to reach the
          under-25 market across such channels was through of the online
          creation of ‘FOMO’ or the ‘fear of missing out’.
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
      products: globalMixin.rockingTheDaisiesProducts,
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
