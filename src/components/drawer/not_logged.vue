<template>
  <div class="pt-5">
    <login-form />
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" @click="navigate($event, item.url)">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [{
        url: "/404",
        icon: "home",
        title: "404"
      },
      {
        url: "/admin.html",
        icon: "person",
        title: "Admin"
      },
      {
        url: "/roulette.html",
        icon: "person",
        title: "Roulette"
      }]
    }
  },
  inject: ["app"],
  components: {
    loginForm: () => import("./login_form.vue"),

  },
  methods: {
    navigate(e, url) {
      if (this.$route.path != url) this.$router.push(url);
      if (this.$vuetify.breakpoint.mdAndDown) this.app.drawer = false;
    }
  }
};
</script>