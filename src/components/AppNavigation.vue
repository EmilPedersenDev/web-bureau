<template>
  <nav>
    <div class="left-nav col-2 col-md-4">
      <router-link to="/" class="img-svg d-none d-sm-block">
        <img
          src="https://www.bigeyeagency.com/wp-content/uploads/2019/08/bigeye-logo.svg"
          alt
        />
      </router-link>
    </div>
    <div class="right-nav col-10 col-md-8">
      <ul>
        <li>
          <router-link :class="classList" to="/about">Services</router-link>
        </li>
        <li>
          <router-link :class="classList" to="/">About Us</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-navigation",
  props: {
    isStartSite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      return ["app-navigation", this.isStartSite && "start-site"];
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  z-index: 2;
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #001e3c;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s ease;
    &.start-site {
      color: #fff;
      &:hover {
        color: #80c565;
      }
    }

    &:hover {
      text-decoration: none;
      color: #80c565;
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
    @media (max-width: 576px) {
      padding-left: 10px;
    }

    img {
      width: 180px;
      @media (max-width: 768px) {
        width: 150px;
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
      padding: 0px;
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
