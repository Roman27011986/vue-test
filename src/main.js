import { createApp } from "vue";
// import Vue from "vue";
import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import VueRouter from "vue-router";
import router from "./router";

import store from "./store/index";
// import Notifications from "vue-notification";
// Vue.config.productionTip = false;
const app = createApp(App);
app.use(router).use(store).mount("#app");

// Vue.use(Notifications)

// Vue.use(Vuex)
//     Vue.use(store)

// Vue.use(VueRouter);

// new Vue({
//   render: (h) => h(App),
//   router,
// }).$mount("#app");
