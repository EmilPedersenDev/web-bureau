<template>
  <example-of-work :products="products" :exampleWork="exampleWork">
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
          Content Creation, Social Media
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
      exampleWork: globalMixin.getExampleWork(3)
    };
  }
};
</script>
