<template>
  <div class="hero-container">
    <div class="background">
      <div class="hero-text">
        <h1>
          We are <br />
          Digital Specialists
        </h1>
        <h4>
          We use insight, technology and creativity to keep brands and
          businesses relevant in an ever-changing world.
        </h4>
      </div>
      <div class="arrow-scroll-down">
        <i class="fas fa-chevron-down arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-banner"
};
</script>

<style lang="scss" scoped>
.hero-container {
  color: #fff;
  height: 722px;
  width: 100%;
  .background {
    .arrow-scroll-down {
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      .arrow {
        animation: bounce 2s infinite;
        font-size: 30px;
      }
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
