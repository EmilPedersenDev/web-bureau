<template>
  <div class="home">
    <advertising-banner :backgroundUrl="setBackgroundImg(2)" section="slide-2">
      <div class="hero-text" slot="background-text">
        <h1>Russian Bear</h1>
        <h4>An Integrated Digital Campaign for Russian Bear.</h4>
      </div>
    </advertising-banner>
    <advertising-banner :backgroundUrl="setBackgroundImg(3)" section="slide-3">
      <div class="hero-text" slot="background-text">
        <h1>Voice Visualiser</h1>
        <h4>We created an experiential activation for Glenfiddich Whisky.</h4>
      </div>
    </advertising-banner>
  </div>
</template>

<script>
import AdvertisingBanner from "../components/AdvertisingBanner";
import globalMixin from "../common/globalMixin";
export default {
  name: "Home",
  mixins: [globalMixin],
  components: {
    AdvertisingBanner
  },
  methods: {
    setBackgroundImg(id) {
      return globalMixin.getBackgroundUrl(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .hero-text {
    justify-content: flex-end;
    padding-bottom: 40px;
  }
}
</style>
