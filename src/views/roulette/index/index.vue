<template>
  <v-layout row wrap reverse fill-height>
    <!-- ROULETTE CONTENT -->
    <v-flex xs12>
      <v-card class="mb-1">
        <v-card-text style="max-width: 1125px; margin: 0 auto">
          <case ref="case"></case>
          <timer />
          <history />
        </v-card-text>
      </v-card>
      <bet-input />
      <bet-section />
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios"
import sleep from "../../../plugins/sleep"
import rolling from "./sounds/rolling.wav"
import tone from "./sounds/tone.wav"

export default {
  data() {
    return {
      axios: null
    }
  },
  methods: {
    play(sound) {
      if (location.pathname != this.location) return;
      if (this.app.muted) return;
      sound.play();
    },
  },

  computed: {
    sounds() {
      return {
        rolling: new Audio(rolling),
        roundEnd: new Audio(tone)
      };
    }
  },

  components: {
    case: () => import("./case.vue"),
    timer: () => import("./timer.vue"),
    history: () => import("./history.vue"),
    /*
    info: () => import("./info/index.vue"),
    */
    betInput: () => import("./bet-input.vue"),
    betSection: () => import("./bet-section.vue"),
  },

  inject: ["core", "app"],

  provide() {
    return {
      roulette: this
    }
  },

  created() {
    this.axios = axios.create({
      baseURL: axios.defaults.baseURL + "/x2r/",
      //headers: { 'X-Custom-Header': 'foobar' }
    });
  },

  async mounted() {
    this.location = location.pathname;
    while (!this.$refs.case) await sleep(1);
    //const info = (await this.axios.get('/info')).data;
    //this.$emit("info", info);

    //document.documentElement.requestFullscreen();
    while (true) {
      this.$emit("newRound", 1, 5000);
      setTimeout(this.$emit.bind(this, "bet", 1, "red", 100), 1000);
      setTimeout(this.$emit.bind(this, "bet", 1, "black", 100), 2000);
      setTimeout(this.$emit.bind(this, "bet", 1, "red", 100), 2400);
      setTimeout(this.$emit.bind(this, "bet", 1, "green", 100), 2700);
      setTimeout(this.$emit.bind(this, "bet", 1, "black", 100), 3000);
      setTimeout(this.$emit.bind(this, "bet", 1, "red", 100), 3500);

      await sleep(5000);
      this.$emit("winNumber", 7, "red");
      await sleep(10000);
    }


  }
};
</script>