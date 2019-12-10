<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in items.filter(val => val.access.includes($user && $user.role))"
      :key="i"
      @click="item.url ? navigate($event, item.url) : item.action && item.action($event)"
    >
      <v-list-item-icon>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { logout } from "../../plugins/router/user"
export default {
  data() {
    return {
      items: [{
        url: "/",
        icon: "home",
        access: ["user", "admin"],
        title: "Главная"
      },
      {
        url: "/profile.html",
        icon: "account_box",
        access: ["user", "admin"],
        title: "Профиль"
      },
      {
        url: "/admin.html",
        icon: "assignment_ind",
        access: ["admin"],
        title: "Администрирование"
      },
      {
        action: logout,
        icon: "logout",
        access: ["user", "admin"],
        title: "Выход"
      }]
    };
  },
  methods: {
    navigate(e, url) {
      if (this.$route.path != url) this.$router.push(url);
      if (this.$vuetify.breakpoint.mdAndDown) this.app.drawer = false;
    }
  }
};
</script>