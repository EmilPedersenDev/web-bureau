<template>
  <div class="home">
    <advertising-banner
      :backgroundUrl="setBackgroundImg(2)"
      section="slide-2"
      :routerLinkText="routerLinkText"
      :backgroundObj="setBackgroundObject(2)"
    >
    </advertising-banner>
    <advertising-banner
      :backgroundUrl="setBackgroundImg(3)"
      section="slide-3"
      :routerLinkText="routerLinkText"
      :backgroundObj="setBackgroundObject(3)"
    >
    </advertising-banner>
    <advertising-banner
      :backgroundUrl="setBackgroundImg(4)"
      section="slide-4"
      :routerLinkText="routerLinkText"
      :backgroundObj="setBackgroundObject(4)"
    >
    </advertising-banner>
    <inspire-banner
      right-text
      leftImg
      imgSrc="https://titusklein.com/user/pages/01.home/home-image3.jpg"
    >
      <p slot="eyebrow" class="eyebrow">INNOVATION BY DESIGN</p>
      <h1 slot="header">CAPTIVATE CUSTOMERS</h1>
      <p slot="body-text-main" class="inside-text-content">
        Distinguish your brands with targeted design and marketing that
        translates your vision into compelling products.
      </p>
      <app-button medium primary slot="footer-button" @click="goToOurWork">
        Our Work
      </app-button>
    </inspire-banner>
    <inspire-banner wholePageText background>
      <p slot="eyebrow" class="eyebrow">INNOVATION BY DESIGN</p>
      <h1 slot="header">SET UP A 30 MIN MEETING</h1>
      <p slot="body-text-main" class="inside-text-content half-page-text">
        Set up a call with one of our creative directors to discover how you can
        leverage design to enhance the launch of your products.
      </p>
      <app-button
        medium
        primary
        isContact
        slot="footer-button"
        @click="goToContact"
      >
        Contact Us
      </app-button>
    </inspire-banner>
  </div>
</template>

<script>
import AdvertisingBanner from "../components/Banners/AdvertisingBanner";
import InspireBanner from "../components/Banners/InspireBanner";
import globalMixin from "../common/globalMixin";
export default {
  name: "Home",
  mixins: [globalMixin],
  components: {
    AdvertisingBanner,
    InspireBanner
  },
  data() {
    return {
      routerLinkText: "See Our Work"
    };
  },
  methods: {
    setBackgroundImg(id) {
      return globalMixin.getBackgroundUrl(id);
    },
    setBackgroundObject(id) {
      return globalMixin.getProductBackgroundById(id);
    },
    goToContact() {
      this.$router.push("/contact");
    },
    goToOurWork() {
      this.$router.push("/services");
    }
  }
};
</script>

<style lang="scss" scoped></style>
