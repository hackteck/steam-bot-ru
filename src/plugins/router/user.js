import axios from "axios"
import Vue from "vue"
import store from "../store"

Vue.set(store, "user", undefined);
Vue.mixin({
  data() {
    return {
      //enable reactivity
      $store: store
    }
  },
  computed: {
    $user: {
      get() { return store.user },
      set(val) { store.user = val }
    }
  }
});

/*
store.user = new Promise(async (resolve, reject) => {
  try {
    const { data } = await axios.get("/user");
    resolve(data);
    store.user = data;
  }
  catch (e) {
    reject(e);
    store.user = {
      role: "admin"
    };
  }
})
*/

store.user = false;

export function logout() {
  store.user = false;
}