<template>
  <!-- temporary -->
  <v-navigation-drawer v-model="app.drawer" :clipped="false || $vuetify.breakpoint.mdAndDown" app>
    <v-layout v-if="$user === undefined" align-center justify-center fill-height>
      <v-progress-circular :size="100" :width="10" color="primary" indeterminate></v-progress-circular>
    </v-layout>
    <app-user-not-logged v-if="$user === false" />
    <app-user-logged-in v-if="typeof $user == 'object'" />
  </v-navigation-drawer>
</template>

<script>
export default {
  inject: ["app"],
  components: {
    appUserNotLogged: () => import("./not_logged.vue"),
    appUserLoggedIn: () => import("./logged_in.vue")
  },
  created() {
    return;
    this.$user = {
      role: "admin",
      balance: 1000,
    }
  }
};
</script>