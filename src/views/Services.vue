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
      <div class="work-examples-wrapper row">
        <div class="work-card col-12 col-md-6">
          <img
            src="https://api.platinumseed.com/wp-content/uploads/2017/08/Work_RussianBear_Cover-1800x1022.jpg"
            alt=""
          />
          <div class="work-card-info">
            <h1>Russian Bear</h1>
            <h2>Integrated Digital Campaign</h2>
          </div>
        </div>
        <div class="work-card col-12 col-md-6">
          <img
            src="https://api.platinumseed.com/wp-content/uploads/2017/08/Work_Glenfiddich_Cover-1800x1022.jpg"
            alt=""
          />
          <div class="work-card-info">
            <h1>Glenfiddich Whisky</h1>
            <h2>Experiential</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {};
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
      margin-left: -100px;
      margin-right: -100px;
      .work-card {
        padding: 0px;
        img {
          background-color: #595959;
          width: 100%;
          padding: 0px;
          transition: all ease-in-out 0.3s;
          &:hover {
            opacity: 0.7;
            cursor: pointer;
          }
        }
        .work-card-info {
          @media (min-width: 768px) {
            padding: 45px 100px 70px;
          }
          h1 {
            font-size: 46px;
            padding-bottom: 12px;
            margin: 0px;
            letter-spacing: -1px;
          }
          h2 {
            font-size: 18px;
            color: #737373;
          }
        }
      }
    }
  }
}
</style>
