import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Import CSS
import "./sass/styles.sass";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
