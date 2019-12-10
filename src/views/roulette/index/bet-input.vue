<template>
  <v-card v-if="$user" class="mb-1">
    <v-card-title primary-title>
      <h5 class="headline mb-0">
        {{$tr.BALANCE}}:
        <code style="white-space: normal;">
          <animated-number :value="$user.balance"></animated-number>X2P
        </code>
      </h5>
      <add-balance v-if="!steamworks"></add-balance>
    </v-card-title>
    <v-card-text class="py-0">
      <v-layout wrap>
        <v-flex class="spacer">
          <v-text-field
            v-model="betValue"
            :label="$tr.BET_AMOUNT"
            :error="!!betError"
            :error-messages="betError"
            outlined
            @mousewheel="betInputScroll"
            @click="betError = false"
          ></v-text-field>
        </v-flex>

        <v-btn-toggle class="btn-bet d-block pb-8">
          <v-btn height="55" class="v-btn--active" @click="betValue = undefined">{{$tr.CLEAR}}</v-btn>
          <v-btn height="55" class="v-btn--active" @click="betValue = prevBet">{{$tr.PREVIOUS_BET}}</v-btn>
          <v-btn height="55" class="v-btn--active" @click="add(1)">+1</v-btn>
          <v-btn height="55" class="v-btn--active" @click="add(10)">+10</v-btn>
          <v-btn height="55" class="v-btn--active" @click="add(100)">+100</v-btn>
          <v-btn height="55" class="v-btn--active" @click="add(1000)">+1000</v-btn>
          <v-btn height="55" class="v-btn--active" @click="add(betValue)">x2</v-btn>
          <v-btn height="55" class="v-btn--active" @click="betValue = $user.balance">MAX</v-btn>
        </v-btn-toggle>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import "../../../plugins/animated-number.js"
export default {
  data() {
    return {
      betError: "",
      betValue: undefined,
      prevBet: undefined
    };
  },

  computed: {
    steamworks() {
      return this.core.steamworks
    }
  },

  methods: {
    add(val) {
      this.roulette.error = null;
      if (!val) return;
      let bet = parseInt(this.betValue);
      if (isNaN(bet)) bet = 0;
      bet += val;
      if (bet > this.$user.balance) return;
      this.betValue = bet;
    },
    betInputScroll(e) {
      this.roulette.error = null;
      if (!this.betValue) this.betValue = 0;
      if (e.wheelDelta < 0 & this.betValue <= 0) {
        this.betValue = 0;
        return;
      }
      if (e.wheelDelta > 0 & this.betValue == this.$user.balance) return;
      this.betValue = parseInt(this.betValue) + (e.wheelDelta > 0 ? 10 : - 10)
    }
  },

  inject: ["core", "roulette"],

  components: {
    addBalance: () => import("./add-balance.vue")
  },

  created() {
    this.$tr.register({
      BALANCE: {
        en: "Balance",
        ru: "Баланс"
      },
      BET_AMOUNT: {
        en: "Bet amount...",
        ru: "Ставка"
      },
      CLEAR: {
        en: "Clear",
        ru: "Очистить"
      },
      PREVIOUS_BET: {
        en: "Last",
        ru: "Посл.",
      }
    });
  },
  mounted() {
    this.roulette.$on("betError", msg => this.betError = msg);
  }
};
</script>

<style>
.btn-bet1 button {
  height: 60px;
}
</style>
