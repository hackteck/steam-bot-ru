<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon large v-on="on" @click="$tr.language = $tr.language == 'ru' ? 'en' : 'ru'">
        <v-avatar size="32px" tile>
          <img :src="getFlag($tr.language)" alt="Flag" />
        </v-avatar>
      </v-btn>
    </template>
    <span>{{$tr.dictionary.LANGUAGE_SWITCHER[$tr.language == 'ru' ? 'en' : 'ru']}}</span>
  </v-tooltip>
</template>

<script>
export default {
  methods: {
    getFlag(lang) {
      if (lang == "en") lang = "us";
      return `https://countryflags.io/${lang}/flat/24.png`
    }
  },
  created() {
    this.$tr.register({
      LANGUAGE_SWITCHER: {
        en: "Switch to English",
        ru: "Переключиться на русский язык"
      }
    });
  }

};
</script>
