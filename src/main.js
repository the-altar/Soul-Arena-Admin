import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import VueFormulate from "@braid/vue-formulate";
import VueScroolTo from "vue-scrollto";

const axiosInstance = Axios.create({
  baseURL: "/",
});

Vue.use(VueScroolTo);
Vue.use(VueFormulate, {
  uploader: axiosInstance,
});

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
