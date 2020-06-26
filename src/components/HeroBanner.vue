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
    background-image: url("https://www.platinumseed.com/img/bg-home-01-large.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
    .hero-text {
      margin: 0 100px;
      display: flex;
      height: 93%;
      justify-content: center;
      flex-direction: column;
      h1 {
        font-size: 4rem;
        font-weight: 800;
        margin-top: 70px;
      }
      h4 {
        font-weight: 400;
        @media (min-width: 768px) {
          width: 70%;
        }
        @media (min-width: 900px) {
          width: 50%;
        }
      }
    }
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
