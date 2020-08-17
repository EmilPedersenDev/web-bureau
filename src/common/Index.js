import Vue from "vue";

import Banner from "./Banner.vue";
import Button from "./Button.vue";
import ExampleOfWork from "./ExampleOfWork.vue";
import Spinner from "./Spinner.vue";
import InspireBanner from "../components/Banners/InspireBanner";

Vue.component("banner", Banner);
Vue.component("app-button", Button);
Vue.component("example-of-work", ExampleOfWork);
Vue.component("spinner", Spinner);
Vue.component("inspire-banner", InspireBanner);
