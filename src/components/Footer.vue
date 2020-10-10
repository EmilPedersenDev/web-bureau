<template>
  <div class="footer">
    <div class="wrapper row">
      <ul class="personal-links col-12 col-sm-6">
        <li>© 2020 Emil Pedersen</li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
      <ul class="social-links col-12 col-sm-6">
        <li>
          <a
            href="https://www.linkedin.com/in/emil-pedersen-6320ab124/"
            target="_blank"
          >
            <i class="fab fa-linkedin"> </i
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/EmilPedersenDev/web-bureau"
            target="_blank"
          >
            <i class="fab fa-github-square"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "bigeye-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background: #fff;
  height: 100px;
  width: 100%;
  .wrapper {
    height: 100%;
    width: inherit;
    align-items: center;

    &.row {
      margin: 0;
      @media (min-width: 1200px) {
        padding: 0 150px;
      }
    }
    ul {
      &.social-links {
        display: flex;
        justify-content: flex-end;
        @media (max-width: 768px) {
          justify-content: center;
        }
        li {
          padding-right: 20px;
          text-align: right;
          i {
            font-size: 24px;
            color: #000;
          }
        }
      }
      &.personal-links {
        @media (max-width: 768px) {
          text-align: center;
        }
        li {
          text-align: left;
          display: inline;
          padding-left: 20px;
          color: #000;
          @media (max-width: 360px) {
            font-size: 14px;
          }
          @media (max-width: 768px) {
            padding-left: 0px;
            &:last-child {
              padding-left: 15px;
            }
            font-size: 14px;
          }
          a {
            color: #000;
          }
        }
      }
      li {
        font-size: 16px;

        a {
          font-size: inherit;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
