<template>
  <v-app>
    <app-drawer />
    <app-toolbar />
    <app-content />
    <app-footer />
    <!-- SKYPE -->
    <!--skype /-->
  </v-app>
</template>

<script>
export default {
  components: {
    appDrawer: () => import("./components/drawer/index.vue"),
    appToolbar: () => import("./components/toolbar/index.vue"),
    appContent: () => import("./components/content/index.vue"),
    appFooter: () => import("./components/footer.vue")
  },
  data() {
    return {
      app: {
        load: false,
        drawer: this.$vuetify.breakpoint.mdAndDown ? false : true
      }
    }
  },
  provide() {
    return {
      core: this,
      app: this.app
    };
  },
  mounted() {
    //emit events
    this.$router.afterEach(this.$emit.bind(this, "load"));
    window.addEventListener("load", this.$emit.bind(this, "load"), true);
    //if route has user check we must emit event in this way
    if (document.readyState == "complete") this.$emit("load", { isTrusted: true });
  }
};
</script>