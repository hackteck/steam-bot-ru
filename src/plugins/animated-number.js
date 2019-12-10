import Vue from "vue"
import anime from "./animejs"

Vue.component("animated-number", {
  props: {
    value: {
      type: [Number, String],
      default: '0',
      required: true,
    },
    easing: {
      type: String,
      default: 'linear',
    },
    duration: {
      type: Number,
      default: 1000,
    }
  },
  template: '<span>{{ animatedValue.toFixed && animatedValue.toFixed(0) }}</span>',
  data() {
    return {
      //локальный дубликат value
      animatedValue: 0
    }
  },
  watch: {
    //смотрим на изменение value
    value(value) {
      this.animateValue(value);
    },
  },
  methods: {
    /**
     * @method animateValue Непосредственное воспроизведение анимации
     * @param {Integer} value Число до которого идет счет
     */
    animateValue(value) {
      anime({
        targets: this,
        animatedValue: value,
        easing: this.easing,
      });
    }
  },
  mounted() {
    //запускаем анимацию при иницализации
    this.animateValue(this.value);
  }
})