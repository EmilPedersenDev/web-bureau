<template>
  <example-of-work :products="products" :exampleWork="exampleWork" :id="4">
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
      exampleWork: globalMixin.getExampleWork(4),
    };
  },
};
</script>
