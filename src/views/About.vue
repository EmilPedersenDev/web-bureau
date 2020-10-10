<template>
  <div class="container-about">
    <div
      id="background"
      :style="`height: ${screenHeight}px`"
      :class="{ 'loading-background': !loaded }"
      class="background"
      v-show="loaded"
    ></div>
    <div class="hero-relative-wrapper">
      <div class="hero-text">
        <p
          class="eyebrow-main-text no-mobile-animation"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          ABOUT US
        </p>
        <h1
          class="no-mobile-animation"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          IMPACT <br />
          BY DESIGN.
        </h1>
        <h2
          class="header no-mobile-animation"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Learn how innovative teams like yours leverage design to increase
          revenue, position products, and grow market share.
        </h2>
      </div>
    </div>
    <div class="arrow-scroll-down">
      <i class="fas fa-chevron-down arrow" @click="scrollToView"></i>
    </div>
    <spinner
      v-show="!loaded"
      :loaded="loaded"
      :screenHeight="screenHeight"
    ></spinner>
    <section id="about-info">
      <inspire-banner wholePageText isWholePageBigger>
        <p slot="eyebrow" class="eyebrow">Unify</p>
        <h1 slot="header">About Us</h1>
        <p slot="body-text-main" class="inside-text-content full-page-text">
          Engaging. Curious. Ambitious. That’s us. A talented bunch of
          strategists, developers, creatives and social managers, passionate
          about building lasting relationships between brands and their people.
          And we do so through creating digital experiences that resonate. The
          depth of our involvement with our brand partners distinguishes us from
          any agency or consultancy. We’re not interested in half-baked schemes
          or menial commitment. We’re all in.
        </p>
      </inspire-banner>
    </section>
    <div><p>dsfsd</p></div>
    <section id="contact-us">
      <inspire-banner wholePageText background>
        <p slot="eyebrow" class="eyebrow">INNOVATION BY DESIGN</p>
        <h1 slot="header">SET UP A 30 MIN MEETING</h1>
        <p slot="body-text-main" class="inside-text-content half-page-text">
          Set up a call with one of our creative directors to discover how you
          can leverage design to enhance the launch of your products.
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
    </section>
  </div>
</template>

<script>
import globalMixins from "../common/globalMixin";

export default {
  name: "about",
  mixins: [globalMixins],
  data() {
    return {
      screenHeight: 0,
      loaded: false,
      backgroundUrl:
        "https://titusklein.com/user/pages/05.about/about-hero.jpg",
      isSubmitted: false,
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });

    this.screenHeight = window.innerHeight;

    let backgroundDiv = document.getElementById("background");

    this.loaded = false;

    globalMixins
      .imageOnLoad(backgroundDiv, this.backgroundUrl)
      .then((result) => {
        this.loaded = true;
      });

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  methods: {
    onResize() {
      this.screenHeight = window.innerHeight;
    },
    scrollToView() {
      let scrollToDiv = document.getElementById("about-info");
      return scrollToDiv.scrollIntoView({ behavior: "smooth" });
    },
    submit() {
      this.isSubmitted = true;
    },
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
.container-about {
  .background {
    animation: fadein 2s;
    position: relative;
  }

  .hero-text {
    padding-top: 60px;
    h1 {
      margin-top: 0px;
      @media (max-width: 768px) {
        font-size: 40px;
      }
    }
  }
}
</style>
