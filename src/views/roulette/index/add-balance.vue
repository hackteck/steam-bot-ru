<template>
  <v-btn class="v-btn--active" style="height:32px" @click="openStorePage()">{{$tr.ADD_BALANCE}}</v-btn>
</template>
<script>

export default {
  computed: {
    steamworks() { return this.core.steamworks },
    storeUrl() {
      return 'https://store.steampowered.com/itemstore/956780/'
    }
  },
  methods: {
    async openStorePage() {
      if (this.steamworks) this.steamworks.navigateTo({ target: { href: this.storeUrl } })
      else {
        //const { data } = await this.core.axios.get("/storeUrl");

      }
    }
  },
  inject: ["core"],
  created() {
    this.$tr.register({
      ADD_BALANCE: {
        en: "+ Add",
        ru: "+ Добавить"
      }
    });
  },
  mounted() {

  }
};
</script>