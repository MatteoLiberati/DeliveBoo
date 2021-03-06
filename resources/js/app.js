/**
  FRONT OFFICE
 **/

window.Vue = require("vue");
window.axios = require("axios");

import App from "./App.vue";
import router from "./routes";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuebraintree from "vue-braintree";

Vue.use(Vuetify);
Vue.use(vuebraintree);

Vue.config.productionTip = false;

const vuetify = new Vuetify();

const app = new Vue({
    el: "#root",
    vuetify,
    vuebraintree,
    router,
    render: h => h(App)
});
