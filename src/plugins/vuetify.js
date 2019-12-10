import Vue from "vue";
import Vuetify from "vuetify/lib";
import "./vuetify-fixes.css"

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
  theme: {
    options: {
      //customProperties: true,
    },
  },
});