<template>
  <v-app-bar ref="appbar" app :clipped-left="false || $vuetify.breakpoint.mdAndDown" :elevate-on-scroll="landing">
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="app.drawer = !app.drawer"></v-app-bar-nav-icon>
    <v-btn text class="headline disable-shadow" href="/">
      <div class="toolbar-logo"></div>
      <span v-if="$vuetify.breakpoint.mdAndUp" class="text-uppercase">hackteck</span>
    </v-btn>
    <v-spacer></v-spacer>

    <app-language-select></app-language-select>
    <app-brightness></app-brightness>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      landing: false,
      classList: [],
    }
  },
  methods: {
    handleTransparency() {
      this.$nextTick(() => {
        this.landing = this.$route.matched[0].instances.default ? this.$route.matched[0].instances.default.$data.landing : false;
        //if not landing use standart app bar
        if (!this.landing) this.$refs.appbar.$el.style.removeProperty("background-color");
        //else make toolbar transparent
        else {
          let transparent = this.classList.length ? this.classList.includes("v-app-bar--hide-shadow") : this.landing;
          if (transparent) this.$refs.appbar.$el.style["background-color"] = "transparent";
          else this.$refs.appbar.$el.style.removeProperty("background-color");
        }
      });
    }
  },

  components: {
    appBrightness: () => import("./brightness.vue"),
    appLanguageSelect: () => import("./language_select.vue")

  },

  inject: ["core", "app"],

  mounted() {
    //create mutation obserserver for watching classes changes
    new MutationObserver(mutations => {
      for (const mutation of mutations) {
        //emit classes and ref
        this.$nextTick(() => {
          this.classList = mutation.target.getAttribute(mutation.attributeName).split(" ");
          this.core.$emit("changeAppBarClasses", this.classList, this.$refs.appbar);
        });
      }
    })
      //observing
      .observe(this.$refs.appbar.$el, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
      });

    //events
    this.core.$on("changeAppBarClasses", this.handleTransparency);
    window.addEventListener('resize', this.handleTransparency);
    this.core.$on("load", this.handleTransparency);
    this.handleTransparency();
  }
}
</script>

<style>
.toolbar-logo {
  background-image: url(./logo.png);
  background-size: contain;
  width: 50px;
  height: 36px;
}

/*disables shodow while howered*/
.disable-shadow:hover::before {
  opacity: 0 !important;
}
/*disables shodow after click*/
.disable-shadow:focus::before {
  opacity: 0 !important;
}
/*make app bar transparent (global changes)*/
.v-app-bar.v-app-bar--hide-shadow {
}
</style>