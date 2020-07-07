<template>
  <banner section="slide-4" size="auto">
    <div class="inspire-banner-wrapper row">
      <div
        class="left-content"
        :class="{
          'col-sm-5': leftText,
          'col-md-12 col-lg-6': leftImg,
          'col-12': wholePageText
        }"
      >
        <div class="inside-images dynamic-placement-content" v-if="leftImg">
          <img
            src="https://titusklein.com/user/pages/01.home/home-image3.jpg"
            alt=""
          />
        </div>

        <div class="inside-text" v-if="leftText">
          text
        </div>

        <div v-if="wholePageText">
          whole page
        </div>
      </div>

      <div class=" col-md-12 col-lg-6 right-content" v-show="!wholePageText">
        <div class="right-inside-text dynamic-placement-content">
          <p class="eyebrow">
            INNOVATION BY DESIGN
          </p>
          <h1>
            CAPTIVATE CUSTOMERS
          </h1>
          <p class="right-text-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            inventore sequi, similique aliquam eius nisi. Debitis non ducimus
            quod sequi atque perferendis, eaque libero, mollitia architecto iste
            in magnam porro.
          </p>
          <app-button medium primary>
            See more
          </app-button>
        </div>
      </div>
    </div>
  </banner>
</template>

<script>
export default {
  name: "inspire-Banner",
  props: {
    leftText: {
      type: Boolean,
      default: false
    },
    leftImg: {
      type: Boolean,
      default: false
    },
    wholePageText: {
      type: Boolean,
      default: false
    },
    imgSrc: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: ""
    }
  },
  computed: {
    getBackgroundImg() {
      return `background-image: url(${this.imgSrc})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  color: black;
  width: 100%;
  height: 100%;
  .inspire-banner-wrapper {
    height: inherit;
    width: inherit;
    &.row {
      margin: 0;
      padding: 86px 32px;
    }

    .left-content {
      &.left-text {
        width: calc(100% / 5 * 3);
      }
      .inside-images {
        padding-top: 20px;
        padding-bottom: 10px;
        height: 100%;
        width: 100%;
        @media (min-width: 992px) {
          float: right;
          padding-right: 20px;
        }

        @media (min-width: 1126px) {
          padding-right: 40px;
        }
        img {
          width: 100%;
        }
      }
    }

    .right-content {
      .right-inside-text {
        @media (min-width: 992px) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding-left: 20px;
        }

        h1,
        p {
          @media (min-width: 1200px) {
            margin-bottom: 20px;
          }
          margin-bottom: 12px;
        }
        h1 {
          font-weight: 600;
          letter-spacing: 2px;
          font-size: 1.25rem;
          @media (min-width: 992px) {
            font-size: 1.5rem;
          }
          @media (min-width: 1040px) {
            font-size: 2rem;
          }
          @media (min-width: 1200px) {
            font-size: 2.25rem;
          }
        }
        .eyebrow {
          letter-spacing: 0.4em;
          font-size: 0.6875rem;
        }
        .right-text-content {
          @media (min-width: 1060px) {
            font-size: 1rem;
          }
          font-size: 0.875rem;
          line-height: 2;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }
}

.dynamic-placement-content {
  @media (min-width: 768px) {
    max-width: 460px;
  }
  @media (min-width: 992px) {
    max-width: 540px;
  }
}
</style>
