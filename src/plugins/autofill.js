import Vue from "vue";
import "./autofill.css"

Vue.directive("autofill", {
  bind(el) {
    el.addEventListener('animationstart', async e => {
      if (e.animationName == "autofill") {
        e.target.previousElementSibling.classList.add("v-label--active");
      }
      else if (e.animationName == "not-autofill") {
       e.target.value || e.target.previousElementSibling.classList.remove("v-label--active");
      }
    });
  }
})