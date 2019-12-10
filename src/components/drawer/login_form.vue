<template>
  <div class="px-4">
    <v-text-field
      v-autofill
      v-model="login"
      prepend-icon="person"
      :error="errorMessage"
      hide-details
      label="Логин"
      autocomplete="login"
    ></v-text-field>
    <v-text-field
      v-autofill
      v-model="password"
      prepend-icon="lock"
      :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
      @click:append="passwordShow = !passwordShow"
      :type="passwordShow ? 'text' : 'password'"
      :error-messages="errorMessage"
      label="Пароль"
      name="password"
      autocomplete="password"
    ></v-text-field>
    <v-btn
      style="width: 100%"
      class="mt-2"
      :loading="loginInProgress"
      :disabled="loginInProgress"
      @click="doLogin()"
    >
      <v-icon left dark>person</v-icon>Войти
    </v-btn>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      login: null,
      password: null,
      passwordShow: false,
      loginInProgress: false,
      errorMessage: null
    }
  },
  methods: {
    async doLogin() {
      this.loginInProgress = true;
      try {
        const { data } = await axios.post("/user", { login: this.login, password: this.password });
        this.$user = Object.assign(data, { role: "user" });
        const { query } = this.$route;
        query.redirect && this.$router.replace(query.redirect);
      }
      catch (e) {
        if (e.response) {
          //not network error
          this.errorMessage = e.response.status == 401 ? "Пользователь не найден!" : e.response.statusText;
        }
      }
      this.loginInProgress = false;
    }
  }
};
</script>