<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon large v-on="on" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon v-html="$vuetify.theme.dark ? 'brightness_2' : 'brightness_5' "></v-icon>
      </v-btn>
    </template>
    <span v-html="$vuetify.theme.dark ? $tr.LIGHT_THEME_SWITCH : $tr.DARK_THEME_SWITCH"></span>
  </v-tooltip>
</template>

<script>
export default {
  created() {
    this.$tr.register({
      LIGHT_THEME_SWITCH: {
        en: "Switch to a light theme",
        ru: "Включить светлую тему"
      },
      DARK_THEME_SWITCH: {
        en: "Switch to a dark theme",
        ru: "Включить темную тему"
      }
    });
  }

};
</script>
