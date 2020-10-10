<template>
  <div class="example-page-container">
    <div class="container-service-pages">
      <section id="head">
        <div class="header-text no-mobile-animation" data-aos="fade-right">
          <h3 class="eyebrow">{{ exampleWork.type }}</h3>
          <h1 class="big-header main-header-mobile-text">
            {{ exampleWork.name }}
          </h1>
          <h2>
            {{ exampleWork.bodyText }}
          </h2>
        </div>
        <div class="img-banner img-wrapper-mobile-compatible">
          <img
            v-show="loaded"
            :src="exampleWork.background"
            alt="South African young rapper"
            @load="isImgLoaded"
          />
          <spinner
            v-show="!loaded"
            :loaded="loaded"
            :screenHeight="screenHeight"
          ></spinner>
        </div>
      </section>
      <section id="description">
        <div class="description-text no-mobile-animation" data-aos="fade-up">
          <slot name="description-text"></slot>
        </div>
      </section>
    </div>
    <div class="container-product-img">
      <section
        id="product-description"
        v-for="(product, id) in products"
        :key="id"
        :style="determineScreenHeight"
      >
        <spinner
          v-show="!loaded"
          :loaded="loaded"
          :screenHeight="screenHeight"
        ></spinner>
        <div class="product-wrapper">
          <div
            class="background d-none d-md-block"
            id="background-desktop"
            v-show="loaded"
          >
            <div class="products-info" :style="getBackgroundColor">
              <p class="eyebrow-main-text">{{ product.header }}</p>

              <p class="no-margin">
                {{ product.infoText }}
              </p>
            </div>
          </div>
          <div id="background-mobile" class="d-md-none">
            <h1 class="header">{{ product.header }}</h1>
            <p>{{ product.infoText }}</p>
            <div class="img-wrapper img-wrapper-mobile-compatible">
              <img
                v-show="loaded"
                :src="product.img"
                alt="example of work with products"
                @load="isImgLoaded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <inspire-banner wholePageText background>
      <p slot="eyebrow" class="eyebrow">INNOVATION BY DESIGN</p>
      <h1 slot="header">SET UP A 30 MIN MEETING</h1>
      <p slot="body-text-main" class="inside-text-content half-page-text">
        Set up a call with one of our creative directors to discover how you can
        leverage design to enhance the launch of your products.
      </p>
      <app-button
        class="contact-button"
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
import { backgroundUrl } from "./productData";
export default {
  name: "example-of-work",
  props: {
    id: {
      type: Number,
    },
    exampleWork: {
      type: Object,
    },
    products: {
      type: Array,
    },
  },
  data() {
    return {
      loaded: false,
      screenHeight: 0,
      screenWidth: 0,
    };
  },
  computed: {
    determineScreenHeight() {
      if (this.screenWidth < 768) {
        return `height: auto`;
      }
      return `height: ${this.screenHeight}px`;
    },
    getBackgroundColor() {
      switch (this.id) {
        case 1:
          return `background: #74181c;`;
        case 2:
          return `background: #412B15;`;
        case 3:
          return `background: #2c1850;`;
        case 4:
          return `background: #244B12;`;

        default:
          return `background: #000;`;
      }
    },
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    let backroundElement = document.querySelectorAll("#background-desktop");

    this.loaded = false;

    this.products.forEach((element, i) => {
      let _this = this;
      let image = new Image();

      image.onload = () => {
        _this.loaded = true;
        backroundElement[i].style.backgroundImage = `url('${element.img}')`;
      };
      image.src = element.img;
    });

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    isImgLoaded() {
      this.loaded = true;
    },
    onResize() {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    },
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/example-of-work.scss";
</style>
