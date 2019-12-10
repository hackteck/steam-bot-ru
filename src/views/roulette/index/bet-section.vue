<template>
  <v-layout wrap>
    <v-flex
      v-for="(prop, color) in colors"
      :key="color"
      xs12
      sm4
      :class="$vuetify.breakpoint.xs ? `mb-1 p${prop.padding}-0` : `bet-section p${prop.padding}-1`"
    >
      <v-card>
        <v-card-title primary-title>
          <v-btn
            large
            :color="prop.class"
            class="ma-0"
            :class="(color == 'black' & !$vuetify.theme.dark & !betButtonDisabled) ? 'theme--dark' : ''"
            style="width:100%"
            :disabled="betButtonDisabled"
            @click="placeBet(color)"
          >{{ prop.numbers }}</v-btn>

          <v-toolbar class="my-2" dense>
            <v-toolbar-title class="text-center" style="width:100%">
              <animated-number :value="prop.bet"></animated-number>
            </v-toolbar-title>
          </v-toolbar>

          <div style="width: 100%">
            <span style="font-size: large;">{{$tr.TOTAL}}</span>
            <div style="float:right; font-size: large;">
              <animated-number :value="totalBet(color)"></animated-number>
            </div>
          </div>
        </v-card-title>
        <!-- ALL BETS LIST -->
        <v-card-text v-if="!$vuetify.breakpoint.xs">
          <v-slide-y-transition class="pa-0" group tag="div">
            <template v-for="(item, i) in prop.bets">
              <div :key="i">
                <v-layout justify-space-between>
                  <div class="text-truncate" style="line-height:unset!important">{{item.name}}</div>
                  <div>{{item.amount}}</div>
                </v-layout>
                <v-divider></v-divider>
              </div>
            </template>
          </v-slide-y-transition>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import "../../../plugins/animated-number.js"
export default {
  data() {
    return {
      betButtonDisabled: false,
      colors: {
        red: {
          padding: "r",
          class: "error",
          numbers: "1 to 7",
          bet: 0,
          bets: []
        },
        green: {
          padding: "x",
          class: "success",
          numbers: "0",
          bet: 0,
          bets: []
        },
        black: {
          padding: "l",
          class: "black",
          numbers: "8 to 14",
          bet: 0,
          bets: []
        }
      }
    }
  },
  computed: {
    betInput() {
      //Be careful with this!
      return this.roulette.$children[1].$data;
    }
  },
  inject: ["core", "roulette"],
  methods: {
    totalBet(color) {
      let amount = 0;
      for (const bet of this.colors[color].bets) amount += bet.amount;
      return amount;
    },
    async placeBet(color) {
      const amount = parseInt(this.betInput.betValue);
      if (amount == 0 || isFinite(amount) == false) return; //ошибка ввода
      if (amount > this.$user.balance) return; //недостаточно баланса
      this.betInput.prevBet = this.betInput.betValue;
      this.betInput.betValue = undefined; //очищаем поле ввода ставки
      //validation ok
      this.betButtonDisabled = true;
      const response = (await this.roulette.axios.post('/placeBet', JSON.stringify({ color, amount }))).data;
      this.betButtonDisabled = false;
      if (response.balance !== undefined) {
        this.roulette.$emit("betError", "");
        this.colors[color].bet += amount;
        this.$user.balance = response.balance;
        this.core.save("balance", this.$user.balance);
      }
      else this.roulette.$emit("betError", response.error);
    },
    bet(id, color, amount) {
      this.colors[color].bets.push({
        name: this.getName(id),
        amount: parseInt(amount, 10)
      });
      this.colors[color].bets.length && this.colors[color].bets.sort((a, b) => a.amount < b.amount)
    },
    getName(id) {
      if (this.core.steamworks) return this.core.steamworks.ISteamFriends.GetFriendPersonaName(id);
      else return id;
    }
  },
  created() {
    this.$tr.register({
      TOTAL: {
        en: "Total",
        ru: "Всего"
      }
    });
  },
  async mounted() {
    this.roulette.$on("bet", this.bet.bind(this));
    this.roulette.$on("newRound", () => {

      this.betInput.betValue = 100;
      this.placeBet("black");

      this.betButtonDisabled = false;
      for (const color in this.colors) {
        this.colors[color].bet = 0;
        this.colors[color].bets = [];
      }
    });
    this.roulette.$on("winNumber", () => this.betButtonDisabled = true);
    this.roulette.$on("confirmation", () => this.betButtonDisabled = true);
    this.roulette.$on("rolled", (number, color) => {
      if (color && this.colors[color] && this.$user) this.$user.balance += this.colors[color].bet * (color == "green" ? 14 : 2);
    });
  }
};
</script>

<style>
.bet-section {
  margin-bottom: 65px;
}

.bet-placed-value > div > div > div > input {
  text-align: center;
  font-size: x-large;
}

.ma-0.black.v-btn.v-btn--disabled.v-btn--large.theme--light.theme--dark {
  background-color: rgba(0, 0, 0, 0.12) !important;
  color: rgba(0, 0, 0, 0.26) !important;
}
</style>