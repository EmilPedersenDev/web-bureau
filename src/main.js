import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Aos from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

import "./style/main.scss";
import "./common/Index";
import "./style/inspire-banner.scss";
import "./style/spinner.scss";
import "./style/images.scss";

new Vue({
  router,
  store,
  created() {
    Aos.init({
      duration: 1500,
      once: true,
      startEvent: "load",
    });
  },
  render: (h) => h(App),
}).$mount("#app");
