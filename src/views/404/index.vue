<template>
  <v-layout fill-height class="minions">
    <v-layout
      class="ripped"
      :class="$vuetify.theme.dark? 'dark-404' : 'light-404' "
      align-center
      justify-space-around
      column
      fill-height
    >
      <v-layout style="padding-top:10vh" column>
        <span style="font-size: 11vh; margin-bottom: -2vh;" class="text-center">404</span>
        <span style="font-size: 5vh;" class="text-center">страница не найдена</span>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      landing: true,
      async ssr() {
        //test server awaitable action
      }
    };
  }
};
</script>

<style scoped>
.minions {
  top: 0;
  width: 100%;
  height: 100%;
  background: url(./minions.webp) no-repeat center center;
  background-color: white;
}

.ripped {
  top: 0;
  width: 100%;
  height: 100%;
  background: url(./ripped.png);
  background-size: 100% 100%;
}

.ripped.dark-404 {
  background-image: linear-gradient(
      to bottom,
      rgba(48, 48, 48, 0.8),
      rgba(0, 0, 0, 0)
    ),
    linear-gradient(to top, rgba(48, 48, 48, 0.8), rgba(0, 0, 0, 0)),
    url(./ripped.png);
}
</style>
