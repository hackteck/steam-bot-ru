import Vue from "vue"
import App from "./App.vue"

//import "./plugins/material"
import "./plugins/i18n";
import "./plugins/observe";
import "./plugins/autofill";
import "./plugins/axios"
import store from "./plugins/store"
import createRouter from "./plugins/router";
import vuetify from "./plugins/vuetify";

//vue components
import brands from "./plugins/brands.vue";
import skype from "./plugins/skype.vue";
import scramble from "./plugins/scramble.vue";

Vue.use({
  install(Vue){
    Vue.component("brands", brands);
    Vue.component("skype", skype);
    Vue.component("scramble", scramble);
  }
});

Vue.config.productionTip = false

export function createApp(context) {
  const router = createRouter(context);
  const app = new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
  });

  return { app, router };
}


