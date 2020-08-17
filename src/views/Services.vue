<template>
  <div class="container-service-pages">
    <h1 class="big-header main-header-mobile-text">Our Work.</h1>
    <div class="service-info-text row">
      <h3>Case Studies</h3>
      <h2>
        Our blood, sweat and craft. It begins with an insight and ends with work
        that makes an impact. Have a look at how we’ve balanced agility, speed
        and collaboration for the most effective results.
      </h2>
    </div>
    <div class="work-examples">
      <div class="work-examples-wrapper row img-wrapper-mobile-compatible">
        <div
          class="work-card col-12 col-md-6"
          v-for="(item, id) in allWork"
          :key="id"
          id="work-img-display"
        >
          <spinner
            v-show="!loaded"
            :loaded="loaded"
            :screenHeight="offsetImgHeight"
          ></spinner>
          <router-link :to="item.route">
            <img
              :src="item.imgUrl"
              alt=""
              v-show="loaded"
              @load="isImgLoaded"
            />
            <div class="work-card-info">
              <h1>{{ item.name }}</h1>
              <h2>{{ item.info }}</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import globalMixin from "../common/globalMixin";
export default {
  name: "services",
  mixins: [globalMixin],
  data() {
    return {
      allWork: globalMixin.allWork,
      loaded: false,
      offsetImgHeight: 0
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth"
    });
    let checkImageOffsetHeight = document.getElementById("work-img-display")
      .offsetHeight;

    let checkWindowInnerWidth = window.innerWidth;

    if (checkImageOffsetHeight > 400) {
      this.offsetImgHeight = checkImageOffsetHeight;
    } else if (checkWindowInnerWidth > 1500) {
      this.offsetImgHeight = 500;
    } else if (checkWindowInnerWidth > 1200) {
      this.offsetImgHeight = 400;
    } else {
      this.offsetImgHeight = 250;
    }
  },
  methods: {
    isImgLoaded() {
      this.loaded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container-service-pages {
  h1 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .service-info-text {
    &.row {
      margin: 0px 0px 80px;

      h2 {
        font-size: 1.25rem;
        font-weight: 400;
        opacity: 0.7;
        max-width: 565px;
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-right: 165px;
      }
    }
  }
  .work-examples {
    .work-examples-wrapper {
      .work-card {
        padding: 0px;
        margin-bottom: 20px;
        transition: all ease-in-out 0.3s;
        @media (min-width: 768px) {
          margin-bottom: 0px;
        }
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
        img {
          background-color: #595959;
          width: 100%;
          padding: 0px;
        }
        a {
          color: #000;
          &:hover {
            h1 {
              color: rgb(122, 122, 122);
            }
          }
        }
        .work-card-info {
          @media (min-width: 768px) {
            padding: 45px 100px 70px;
          }

          h1 {
            font-size: 30px;
            transition: all 0.3s ease-in-out 0s;
            margin: 20px 0px 0px 0px;
            letter-spacing: -1px;
            padding-bottom: 5px;
            padding-left: 10px;
            @media (min-width: 768px) {
              font-size: 36px;
              padding-bottom: 12px;
              padding-left: 0px;
              margin: 0px;
            }
            @media (min-width: 1200px) {
              font-size: 46px;
            }
          }
          h2 {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 20px;
            color: #737373;
            padding-left: 10px;
            @media (min-width: 768px) {
              width: 70%;
              padding-left: 0px;
            }
            @media (min-width: 900px) {
              font-size: 1.125rem;
              width: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
