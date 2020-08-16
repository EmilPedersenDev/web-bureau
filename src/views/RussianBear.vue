<template>
  <example-of-work :products="products" :exampleWork="exampleWork">
    <template slot="description-text">
      <div class="row">
        <h1 class="information col-12 col-xl-2">Info</h1>
        <p class="text col-12 col-xl-8 inside-text-content">
          2017 saw the launch of the Russian Bear #IAmNextSessions, where
          hopeful rappers compete for a chance to win a recording deal with
          South African rap star Kwesta. A through-the-line campaign,
          #IAmNextSessions incorporated a number of touch points, including a
          mobile recording studio, which traveled around South Africa to find
          SA’s next hip-hop superstar. Ultimately, we conceptualised a digital
          strategy suited to the Russian Bear consumer, whose behaviour differs
          substantially from those consumers within the premium alcohol market.
          <br />
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
      exampleWork: globalMixin.getExampleWork(1)
    };
  }
};
</script>
