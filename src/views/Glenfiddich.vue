<template>
  <example-of-work :products="products" :exampleWork="exampleWork">
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
      exampleWork: globalMixin.getExampleWork(2)
    };
  }
};
</script>
