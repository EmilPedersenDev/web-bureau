<template>
  <div class="container-work">
    <section id="head">
      <div class="header-text">
        <slot name="main-header-text"></slot>
      </div>
      <div class="img-banner">
        <slot name="main-img"></slot>
      </div>
    </section>
    <section id="description">
      <div class="description-text">
        <slot name="description-text"></slot>
      </div>
    </section>
    <section id="product-description">
      <slot name="product-wrapper"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "example-of-work",
  props: {
    id: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.container-work {
  @media (min-width: 768px) {
    padding: 45px 100px;
  }
  color: black;
  .header-text {
    h1 {
      margin-top: 20px;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
      margin-bottom: 40px;
    }
    h3 {
      &.eyebrow {
        font-size: 1.2rem;
        margin: 0;
      }
    }
  }
  .img-banner {
    padding: 0;
    @media (min-width: 768px) {
      margin-left: -100px;
      margin-right: -100px;
    }
    img {
      width: 100%;
    }
  }
  .description-text {
    margin: 70px 0px;
    .row {
      .information,
      .text,
      .type {
        margin-bottom: 40px;
      }

      .type {
        text-align: right;
      }
    }
  }

  .product-wrapper {
    margin-bottom: 70px;
    h1 {
      margin-bottom: 0;
    }

    .img-wrapper {
      margin-left: -100px;
      margin-right: -100px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
