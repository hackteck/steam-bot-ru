<template>
  <div class="my-1 timer">
    <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">{{status}}</span>
    <div class="error" style="height:50px; width:100%; position:absolute; opacity:0.3"></div>
    <div ref="stripe" class="error" style="height:100%"></div>
  </div>
</template>

<script>
import animejs from "../../../plugins/animejs"
export default {
  data() {
    return {
      newRoundTimer: null,
      resetTimer: null,
      rolling: false,
      status: "Loading...",
    }
  },

  methods: {
    async newRound(roundId, duration = 45000) {
      this.rolling = false;
      if (!this.newRoundTimer || this.newRoundTimer.duration != duration) {
        this.newRoundTimer = animejs({
          targets: this.$refs.stripe,
          width: "0%",
          duration,
          autoplay: false,
          easing: 'linear',
          update: anim => {
            if (this.rolling) {
              anim.pause();
              this.$refs.stripe.style.width = 0;
            }
            else this.status = this.$tr("ROLLING_IN", ((duration - anim.currentTime) / 1000).toFixed(2));
          }
        });
      }
      this.$emit("newRoundTimerStarted");
      this.newRoundTimer.restart();
      await this.newRoundTimer.finished;
      this.$emit("newRoundTimerFinished");
      this.status = this.$tr.BETS_CONFIRMING;
    },
    async winNumber(number, color, wobble, skipTime = 0) {
      this.rolling = true;
      this.$refs.stripe.style.width = 0;
      number = parseInt(number, 10);
      this.status = "** " + this.$tr.ROLLING + " **"
      this.roulette.play(this.roulette.sounds.rolling);
      await this.roulette.$refs.case.spin(number, wobble, skipTime);
      this.roulette.play(this.roulette.sounds.roundEnd);
      this.status = "** " + this.$tr.ROLLED + " " + number + " **"
      this.roulette.$emit("rolled", number, color);

      //reset
      this.resetTimer = this.resetTimer || animejs({
        targets: this.$refs.stripe,
        width: "100%",
        duration: 2000,
        autoplay: false,
        easing: 'linear'
      });
      this.$emit("resetTimerStarted");
      this.resetTimer.restart();
      await this.resetTimer.finished;
      this.$emit("resetTimerFinished");
    }
  },
  inject: ["roulette"],
  created() {
    this.$tr.register({
      ROLLING: {
        en: "ROLLING",
        ru: "ВРАЩЕНИЕ"
      },
      ROLLED: {
        en: "Rolled",
        ru: "Выпало"
      },
      ROLLING_IN: {
        en: "Rolling in %s",
        ru: "Вращение через %s"
      },
      BETS_CONFIRMING: {
        en: "Confirmation all bets...",
        ru: "Подтверждение всех ставок..."
      }
    });
  },
  mounted() {
    this.roulette.$on("newRound", this.newRound.bind(this));
    this.roulette.$on("winNumber", this.winNumber.bind(this));
  }
}
</script>

<style>
.timer {
  height: 50px;
  position: relative;
}
.timer > span {
  font-weight: 700;
  font-size: 18px;
  position: absolute;
  left: 0px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  z-index: 1;
}
</style>