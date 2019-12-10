<template>
  <v-layout wrap class="mt-4">
    <v-flex xs12 sm2>{{$tr.PREVIOUS}}</v-flex>
    <v-flex xs12 sm10 class="d-block">
      <v-btn
        v-for="(number, i) in history"
        :key="i"
        :color="getColor(number)"
        elevation="0"
        dark
        fab
        style="max-height: 32px; max-width: 32px"
        class="mx-1"
        v-html="number"
      ></v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      history: []
    }
  },
  created() {
    this.$tr.register({
      PREVIOUS: {
        en: "Previous numbers",
        ru: "Предыдущие номера"
      }
    });
  },
  methods: {
    getColor(num) {
      if (num == 0) return "success";
      else if ((num > 0) & (num < 8)) return "error";
    }
  },
  inject: ["roulette"],
  mounted() {
    this.roulette.$on("info", info => {
      this.history = info.history;
      if (info.roll < 0 & info.roll > -8) {
        const winNumber = this.history.shift();
        this.roulette.$emit("winNumber", winNumber, this.getColor(winNumber), undefined, -1000 * info.roll);
      }
      else info.roll && this.roulette.$emit("newRound", undefined, info.roll * 1000);
    });

    this.roulette.$on("rolled", number => {
      if (this.history.length >= 10) this.history.pop();
      this.history.unshift(number);
    });
  }
};
</script>
