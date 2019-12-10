import Vue from 'vue';
import "./observe.css"

if (typeof IntersectionObserver != "undefined") {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      let { classList, hideElem, repeat } = entry.target.dataset;
      classList = classList ? classList.split(",") : [];
      repeat = JSON.parse(repeat);
      //handle
      if (entry.isIntersecting) {
        hideElem && entry.target.classList.remove("opacity-0");
        classList.length && entry.target.classList.add(...classList);
        if (!repeat) observer.unobserve(entry.target)
      }
      else {
        classList.length && entry.target.classList.remove(...classList);
      }
      //invoke callback
      entry.target.observeFn && entry.target.observeFn(entry.isIntersecting);
    }
  });

  Vue.directive('observe', {
    bind(el, binding) {
      //defaults
      let classList = ["tracking-in-expand"];
      el.dataset.hideElem = binding.value ? binding.value.hide === undefined || binding.value.hide == true : true;
      if (el.dataset.hideElem) el.classList.add("opacity-0");
      el.dataset.repeat = binding.value ? binding.value.repeat ? true : false : false;

      if (binding.value instanceof Object) {
        //callback function
        if (binding.value.observeFn) el.observeFn = binding.value.observeFn;
        //classList can be string or array, parse it next
        if (binding.value.classList) binding.value = binding.value.classList;
      }
      //parse binding.value
      if (binding.value instanceof Array) classList = binding.value;
      if (binding.value instanceof String) classList = [binding.value];
      if (binding.value instanceof Function) { el.observeFn = binding.value; classList = [] }
      //set classList
      el.dataset.classList = classList;
      observer.observe(el);
    }
  })
} else {
  console.warn("NO IntersectionObserver!", Vue.$isServer);
  Vue.directive('observe', {});
}