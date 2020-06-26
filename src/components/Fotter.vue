<template>
  <div class="fotter">
    <div class="wrapper row">
      <ul class="personal-links col-12 col-sm-6">
        <li>© 2020 Emil Pedersen</li>
        <li><a href="#">Contact Us</a></li>
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
          <a href="https://github.com/EmilPedersenDev" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "fotter"
};
</script>

<style lang="scss" scoped>
.fotter {
  background: #29292e;
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
        li {
          padding-right: 20px;
          text-align: right;
          i {
            font-size: 24px;
          }
        }
      }
      &.personal-links {
        li {
          text-align: left;
          display: inline;
          padding-left: 20px;
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
