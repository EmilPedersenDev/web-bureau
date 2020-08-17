<template>
  <div class="container-contact">
    <div
      id="background"
      :style="`height: ${screenHeight}px`"
      :class="{ 'loading-background': !loaded }"
      class="background"
      v-show="loaded"
    >
      <div class="hero-text">
        <p class="eyebrow-main-text">
          Contact
        </p>
        <h1>
          HOW <br />
          TO START.
        </h1>
        <h2>
          Let us help your innovative teams leverage design to commercialize
          innovations and drive revenue growth.
        </h2>
      </div>
      <div class="arrow-scroll-down">
        <i class="fas fa-chevron-down arrow" @click="scrollToView"></i>
      </div>
    </div>
    <spinner
      v-show="!loaded"
      :loaded="loaded"
      :screenHeight="screenHeight"
    ></spinner>
    <section id="info-text-container" v-if="!isSubmitted">
      <inspire-banner wholePageText background>
        <p slot="eyebrow" class="eyebrow">INNOVATION BY DESIGN</p>
        <h1 slot="header">COMPLEXITY</h1>
        <p slot="body-text-main" class="inside-text-content half-page-text">
          We intimately understand how daunting the design process can be; we’ve
          worked with innovators of all types and have launched hundreds of
          products. Using our unique innovation-focused design framework, we
          provide your team with the creative support needed to avoid failure
          and ensure product success.
        </p>
      </inspire-banner>
    </section>
    <section
      id="contact-form"
      class="container-service-pages"
      v-if="!isSubmitted"
    >
      <div class="row">
        <div class="info-before-form col-12 col-md-6">
          <h1>GET ADVICE</h1>
          <h2>DISCOVER YOUR NEXT STEPS</h2>
          <p>
            Innovation starts with you. Get in touch and discover how we’ve
            helped companies like yours leverage design to fuel innovation that
            drives revenue growth.
          </p>
        </div>
        <div class="form col-12 col-md-6">
          <form @submit.prevent.stop="submit">
            <div class="form-input row">
              <div class="col-12">
                <input class="input-max" type="name" placeholder="Name" />
              </div>
            </div>
            <div class="form-input row">
              <div class="col-12">
                <input class="input-max" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="form-input row">
              <div class="col-12">
                <input class="input-max" type="company" placeholder="Company" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea
                  style="width: 100%; padding: 15px;"
                  class="input-max"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                />
              </div>
            </div>
            <app-button medium primary type="submit">
              Send
            </app-button>
          </form>
        </div>
      </div>
    </section>
    <section id="thank-you" class="thank-you-note-wrapper" v-if="isSubmitted">
      <inspire-banner class="thank-you-note" wholePageText background>
        <p slot="eyebrow" class="eyebrow">THANK YOU!</p>
        <h1 slot="header">We will contact you soon!</h1>
      </inspire-banner>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      screenHeight: 0,
      loaded: false,
      backgroundUrl:
        "https://titusklein.com/user/pages/06.contact/contact-hero.jpg",
      isSubmitted: false
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
    this.screenHeight = window.innerHeight;

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    let backgroundDiv = document.getElementById("background");

    this.loaded = false;
    let image = new Image();
    let _this = this;

    image.onload = function() {
      _this.loaded = true;
      backgroundDiv.style.backgroundImage =
        "url('" + _this.backgroundUrl + "')";
    };

    image.src = this.backgroundUrl;
  },

  methods: {
    onResize() {
      this.screenHeight = window.innerHeight;
    },
    scrollToView() {
      let scrollToDiv;
      if (this.isSubmitted) {
        scrollToDiv = document.getElementById("thank-you");
      } else {
        scrollToDiv = document.getElementById("info-text-container");
      }

      return scrollToDiv.scrollIntoView({ behavior: "smooth" });
    },
    submit() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container-contact {
  .background {
    animation: fadein 2s;
    .hero-text {
      height: 93%;
      padding-top: 60px;
      h1 {
        margin-top: 0px;
        @media (max-width: 768px) {
          font-size: 40px;
        }
      }
      h2 {
        line-height: 2;
        font-size: 1rem;
      }
    }
  }

  #contact-form {
    margin: 80px 0px;
    .form {
      padding: 0px;
      .form-input {
        margin-bottom: 20px;
        .input-max {
          padding: 15px;
          width: 100%;
        }
        textarea {
          webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
    }
  }

  .info-before-form {
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    @media (min-width: 768px) {
      padding-right: 60px;
    }
    @media (min-width: 1200px) {
      padding-right: 15px;
    }
    p {
      max-width: 500px;
      line-height: 2;
    }
    h2 {
      font-size: 16px;
      letter-spacing: 0.4rem;
      margin-bottom: 20px;
    }
  }

  .thank-you-note-wrapper {
    .thank-you-note {
      animation: fadein 2s;
    }
  }
}
</style>
