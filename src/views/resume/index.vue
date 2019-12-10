<template>
  <section class="fill-height" style="background-color: rgba(0, 0, 0, 0.03); color:unset!important">
    <v-layout class="parallax" :class="parallaxClasses" :style="height('top')">
      <v-layout column align-center justify-center>
        <v-avatar size="30vh">
          <img class="animated zoomIn" src="./me.jpg" alt="Yup, its me!" />
        </v-avatar>
        <div v-observe :class="nameClass" class="text-uppercase">{{$tr.EVGENIY_MNATSAKANOV}}</div>
        <h1 v-observe :class="descriptionClass" class="primary--text text-uppercase">
          <scramble :phrases="phrases" :interval="1500" />
        </h1>
      </v-layout>
    </v-layout>

    <!-- SKILLS AND OFFERS -->
    <skills />

    <!-- CONTACT INFORMATION -->
    <v-layout
      :class="$vuetify.breakpoint.mdAndUp ? 'sloped-top' : 'no-sloped' "
      style="min-height: 650px;"
      :style="height('bottom')"
    >
      <!-- BACKGROUND MAP -->
      <background-map />
      <!-- CONTACT FORM -->
      <contact-form></contact-form>
    </v-layout>
    <!-- WATCH FOR VUETIFY THEME CHANGES-->
    <span :key="test">{{$tr.B}}</span>
  </section>
</template>

<script>
//import colors from 'vuetify/lib/util/colors'
export default {
  data() {
    return {
      landing: true
    }
  },
  methods: {
    height(type) {
      if (type == "top") return 'min-height: calc(100vh - ' + this.$vuetify.application.footer + 'px)';
      else if (type == "bottom") {
        return this.$vuetify.breakpoint.mdAndUp ?
          'height: calc(100vh - ' + (this.$vuetify.application.top + this.$vuetify.application.footer) + 'px)' :
          'height: 1075px'
      }
    },
  },
  computed: {
    test() {
      document.documentElement.style.setProperty('--color-primary', this.$vuetify.theme.currentTheme.primary + "80");
      return this.$vuetify.theme.currentTheme.primary;
    },
    parallaxClasses() {
      return [
        this.$vuetify.breakpoint.mdAndUp ? 'sloped-bottom' : 'no-sloped',
        this.$vuetify.theme.dark ? 'dark' : 'light'
      ]
    },
    nameClass() {
      if (this.$vuetify.breakpoint.xs) return ['display-0', 'font-weight-regular'];
      else if (this.$vuetify.breakpoint.sm) return 'display-2';
      else if (this.$vuetify.breakpoint.md) return 'display-3';
      else if (this.$vuetify.breakpoint.lg) return 'display-3';
      else return 'display-3';
    },
    descriptionClass() {
      if (this.$vuetify.breakpoint.xs) return ['display-0', 'font-weight-regular'];
      else if (this.$vuetify.breakpoint.sm) return 'display-1';
      else if (this.$vuetify.breakpoint.md) return 'display-2';
      else if (this.$vuetify.breakpoint.lg) return 'display-2';
      else return 'display-3';
    },
    phrases() {
      return [
        /*this.$tr.*/"FRONT_END_DEVELOPER",
        /*this.$tr.*/"WEB_DEVELOPER",
        /*this.$tr.*/"UX_UI_DESIGNER",
        /*this.$tr.*/"SEO_SPECIALIST",
        /*this.$tr.*/"WEB_SERVER_ADMNINSTRATOR",
        /*this.$tr.*/"SOFTWARE_ENGINEER",
        /*this.$tr.*/"COOL_GUY"
      ]
    }
  },
  components: {
    skills: () => import("./skills_offers.vue"),
    backgroundMap: () => import("./background-map.vue"),
    contactForm: () => import("./contact-form.vue")
  },
  provide() {
    return { resume: this }
  },
  created() {
    this.$tr.register({
      EVGENIY_MNATSAKANOV: {
        en: "Evgeniy Mnatsakanov",
        ru: "Евгений Мнацаканов"
      },
      FULL_STACK_DEVELOPER: {
        en: "Full-stack developer",
        ru: "Full-stack разработчик"
      },
      B: {
        en: "*Brevity is the soul of wit",
        ru: "*Краткость - сестра таланта. Сейчас интегрирую различные свои сервисы в единое целое, которое будет на сайте. Следите за обновлениями :)"
      }
    });
  }
};
</script>

<style>
.display-0 {
  font-size: 1.5rem !important;
}
/* SLOPED */
.sloped-top {
  clip-path: polygon(72% 0, 100% 12%, 100% 100%, 0 100%, 0 12%);
}
.sloped-bottom {
  clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
}
.no-sloped {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
}
/* PARALLAX */
.parallax {
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax.light {
  background-image: linear-gradient(to bottom, white, var(--color-primary)),
    url(./P80803-122213.jpg);
}
.parallax.dark {
  background-image: linear-gradient(to bottom, black, var(--color-primary)),
    url(./P80803-122213.jpg);
}
.parallax-disable {
  background-attachment: scroll;
}
</style>