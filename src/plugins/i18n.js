import Vue from 'vue';

//create Vue component
const component = new Vue({
  data: {
    language: "en",
    languages: ["ru", "en"]
  },
  methods: {
    translate(string) {
      //debugger;
      if (string in this.dictionary == false) {
        console.warn("для языка", this.language, "нет перевода для", string);
        return string;
      } else if (arguments.length == 1) {
        if (this.dictionary[string][this.language]) return this.dictionary[string][this.language];
        else {
          console.warn("Отсутствует язык", this.language, "для перевода", string);
          return string;
        }
      } else {
        let result = this.dictionary[string][this.language];
        for (const pos in arguments) {
          if (pos == 0) continue;
          result = result.replace("%s", arguments[pos]);
        }
        return result;
      }
    }
  }
});

//modify 
Vue.prototype.$tr = component.translate;
Vue.prototype.$tr.register = translation => {
  if (!component.dictionary) component.dictionary = {};
  for (const key in translation) {
    if (component.dictionary[key]) {
      console.warn(key, "уже в словаре для перевода!");
      continue;
    }
    component.dictionary[key] = translation[key];
    Object.defineProperty(Vue.prototype.$tr, key, {
      get() { return Vue.prototype.$tr(key) }
    });
  }
}
Object.defineProperty(Vue.prototype.$tr, 'language', {
  get() { return component.language },
  set(language) { component.language = language }
});
Object.defineProperty(Vue.prototype.$tr, 'dictionary', {
  get() { return component.dictionary }
});

//proxy
if (typeof Proxy != "undefined") {
  Vue.prototype.$tr = new Proxy(Vue.prototype.$tr, {
    get(target, prop) {
      if (prop in target == false) {
        console.warn("для языка", target.language, "нет перевода для", prop);
        return prop;
      } else return target[prop];
    }
  });
} else console.log("нет поддержки Proxy!");

if (!Vue.$isServer && typeof navigator != "undefined") {
  const browserLang = navigator.language.split("-")[0];
  if (component.languages.includes(browserLang)) Vue.prototype.$tr.language = browserLang;
}

//Test
Vue.prototype.$tr.register({
  TEST: {
    en: "Test",
    ru: "Тест"
  }
})