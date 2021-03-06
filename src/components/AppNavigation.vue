<template>
  <nav>
    <div class="left-nav col-2 col-md-4">
      <router-link to="/" class="img-svg no-underline">
        <img
          v-show="isHomePage"
          class="home-logo"
          src="https://www.bigeyeagency.com/wp-content/uploads/2019/08/bigeye-logo.svg"
          alt=""
        />

        <img
          v-show="!isHomePage"
          class="sub-logo"
          src="https://www.bigeyeagency.com/wp-content/uploads/2019/08/bigeye-logo-small.svg"
          alt=""
        />
      </router-link>
      <router-link to="/" class="d-block d-sm-none">
        <img
          class="sub-logo"
          src="https://www.bigeyeagency.com/wp-content/uploads/2019/08/bigeye-logo-small-white.svg"
          alt=""
      /></router-link>
    </div>
    <div class="right-nav col-10 col-md-8">
      <ul>
        <li class="no-mobile-view">
          <router-link :class="classList" to="/services">Our Work</router-link>
        </li>
        <li class="no-mobile-view">
          <router-link :class="classList" to="/about">About Us</router-link>
        </li>
        <li class="no-mobile-view">
          <router-link :class="classList" to="/contact">Contact</router-link>
        </li>
        <li class="no-desktop-view">
          <i
            v-if="!isToggled"
            class="fas fa-bars"
            :class="{ 'sub-page': !isHomePage }"
            @click="toggle(true)"
          ></i>
        </li>
      </ul>
    </div>
    <div
      :style="menuHeight"
      :class="[
        isToggled ? 'dropdown-wrapper-active' : 'dropdown-content-inactive'
      ]"
    >
      <i v-if="isToggled" class="fas fa-times" @click="toggle"></i>

      <ul>
        <li @click="toggle">
          <router-link :class="classList" to="/services">Our Work</router-link>
        </li>
        <li @click="toggle">
          <router-link :class="classList" to="/about">About Us</router-link>
        </li>
        <li @click="toggle">
          <router-link :class="classList" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-navigation",
  data() {
    return {
      loaded: false,
      isToggled: false,
      screenHeight: 0
    };
  },
  mounted() {
    this.screenHeight = window.innerHeight;

    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  watch: {
    screenHeight(val) {
      return val;
    }
  },
  computed: {
    classList() {
      return [
        "app-navigation",
        this.isHomePage && "start-site",
        !this.isHomePage && "sub-page-link"
      ];
    },
    isHomePage() {
      return (
        this.$route.path === "/" ||
        this.$route.path == "/contact" ||
        this.$route.path === "/about"
      );
    },
    menuHeight() {
      if (this.isToggled) {
        return `height: ${this.screenHeight}px`;
      } else {
        return `height: 0px`;
      }
    }
  },
  methods: {
    toggle(bool) {
      this.isToggled = !this.isToggled;
    },
    onResize() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  z-index: 2;

  .fas {
    width: 20px;
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
  .dropdown-wrapper-active {
    position: fixed;
    z-index: 7;
    padding: 30px;
    color: #000;
    background-color: #000;
    width: 100%;
    .fa-times {
      color: #fff;
      float: right;
      font-size: 30px;
    }
    ul {
      position: absolute;
      top: 30%;
      margin-top: -50px;
      margin-left: 30px;
      li {
        margin: 20px 0px;
        a {
          font-size: 24px;
          color: #fff;
          &.sub-page-link {
            color: #fff;
            &:hover {
              &::before {
                background-color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .dropdown-content-inactive {
    display: none;
    .sub-page {
      color: #000;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #001e3c;
    font-size: 16px;
    font-weight: 600;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1px;
      left: 0px;
      background-color: black;
      transform: scale(0);
      visibility: hidden;
      transition: all 0.3s ease-in-out 0s;
    }
    &.start-site {
      color: #fff;
      &:hover {
        &::before {
          background-color: #fff;
        }
      }
    }

    &.no-underline {
      &:hover {
        &::before {
          visibility: hidden;
        }
      }
    }

    &:hover {
      text-decoration: none;
      &::before {
        visibility: visible;
        transform: scale(1);
      }
    }
  }
  .left-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 100px;
    height: 110px;

    @media (max-width: 768px) {
      padding-left: 50px;
    }
    @media (max-width: 575px) {
      padding-left: 33px;
    }

    img {
      &.home-logo {
        width: 180px;
        @media (max-width: 575px) {
          width: 150px;
          display: none;
        }
      }
      &.sub-logo {
        max-height: 40px;
        @media (max-width: 768px) {
          color: #000;
        }
      }
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    @media (max-width: 768px) {
      padding-right: 40px;
    }
    @media (max-width: 576px) {
      padding-right: 28px;
    }

    .no-mobile-view {
      @media (max-width: 992px) {
        display: none;
      }
    }

    .no-desktop-view {
      @media (min-width: 993px) {
        display: none;
      }
      .sub-page {
        color: black;
      }
    }

    ul {
      display: flex;
      margin: 0;
      li {
        margin-right: 30px;

        @media (max-width: 780px) {
          margin-right: 20px;
          a {
            font-size: 16px;
          }
        }
        @media (max-width: 576px) {
          margin-right: 10px;
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
