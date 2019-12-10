<template>
  <div id="case" ref="case">
    <div id="pointer"></div>
  </div>
</template>

<script>
import sleep from "../../../plugins/sleep"
export default {
  data() {
    return {
      order: [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8],
      R: 0.999,
      S: 0.01,
      tf: 0,
      vi: 0,
      animStart: 0,
      isMoving: false,
      snapX: 0,
      LOGR: Math.log(0.999),
      CASEW: 1125
    };
  },
  methods: {
    spin(roll, wobble, skipTime = 0) {
      return new Promise(resolve => {
        if (roll == undefined) roll = this.rand(0, 14);
        if (wobble == undefined) wobble = Math.random();

        var index = 0;
        for (var i = 0; i < this.order.length; i++) {
          if (roll == this.order[i]) {
            index = i;
            break;
          }
        }
        var max = 34;
        var min = -34;
        var w = Math.floor(wobble * (max - min + 1) + min);
        var dist = index * 75 + 36 + w;
        dist += 1125 * 5;
        this.animStart = new Date().getTime() - skipTime;
        this.vi = this.getVi(dist);
        this.tf = this.getTf(this.vi);
        this.isMoving = true;
        setTimeout(() => resolve(roll, wobble), this.tf - skipTime);
        this.render();
      })
    },

    d_mod(vi, t) {
      return vi * (Math.pow(this.R, t) - 1) / this.LOGR;
    },
    getTf(vi) {
      return (Math.log(this.S) - Math.log(vi)) / this.LOGR;
    },
    getVi(df) {
      return this.S - df * this.LOGR;
    },
    v(vi, t) {
      return vi * Math.pow(this.R, t);
    },

    render() {
      var t = new Date().getTime() - this.animStart;

      if (t > this.tf) t = this.tf;
      var deg = this.d_mod(this.vi, t);
      this.view(deg);

      if (t < this.tf) requestAnimationFrame(this.render.bind(this));
      else {
        this.snapX = deg;
        this.isMoving = false;
      }
    },

    snapRender() {
      this.CASEW = this.$refs.case.offsetWidth;
      this.isMoving || this.view(this.snapX);
    },

    view(offset) {
      offset = -((offset + 1125 - this.CASEW / 2) % 1125);
      this.$refs.case.style["background-position"] = offset + "px 0px";
    },

    rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },

  inject: ["roulette"],
  watch: {
    '$route.path': async function () {
      if (location.pathname == this.roulette.location) {
        while (this.$refs.case.offsetWidth == 0) await sleep(10);
        this.snapRender();
      }
    }
  },

  mounted() {
    window.addEventListener("resize", this.snapRender);
    this.snapRender();
  }
};
</script>

<style>
#case {
  max-width: 1125px;
  border: 1px solid;
  border-radius: 4px;
  height: 75px;
  background-image: url("./img/cases.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  position: relative;
}
#pointer {
  width: 3px;
  background: #ff0;
  position: absolute;
  left: 50%;
  top: 0px;
  height: 100%;
}
</style>