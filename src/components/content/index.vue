<template>
  <v-content ref="content">
    <div v-if="!landing" class="background"></div>

    <v-container style="position:relative;" ref="container" fluid fill-height>
      <!-- LOADING -->
      <v-layout justify-center row wrap fill-height>
        <v-flex lg11 xl8 fill-height ref="page">
          <v-layout v-show="loading" align-center justify-center fill-height>
            <v-progress-circular :size="100" :width="10" color="primary" indeterminate></v-progress-circular>
          </v-layout>
          <!-- CONTENT -->
          <keep-alive>
            <router-view v-show="!loading">content</router-view>
          </keep-alive>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      landing: false,
      loading: false
    }
  },
  inject: ["core", "app"],
  methods: {
    handleLanding() {
      this.$nextTick(() => {
        this.landing = this.$route.matched[0].instances.default.$data.landing;
        if (this.landing) {
          this.$refs.content.$el.classList.add("py-0");
          this.$refs.container.classList.add("pt-0");
          this.$refs.container.style.setProperty('padding-bottom', this.$vuetify.application.footer + "px", 'important');
          this.$refs.page.style["min-width"] = "100%";
        }
        else {
          this.$refs.content.$el.classList.remove("py-0");
          this.$refs.container.classList.remove("pt-0");
          this.$refs.page.style.removeProperty("min-width");
        }
      });
    },
    findImgs(element, imgs = []) {
      const style = window.getComputedStyle(element);
      //find background-image
      const bi = style.getPropertyValue('background-image');
      if (bi != "none") {
        let match = /url\("(.*)"\)/.exec(bi);
        if (match) imgs.push(match[1]);
      }
      //recursive search
      for (const child of element.children) this.findImgs(child, imgs);
      //return list
      return imgs;
    },
    loadImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = resolve;
        img.onerror = reject
        img.src = src;
      })
    }
  },

  mounted() {
    const element = this.$refs.page;
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      element.classList.remove('animated', 'fadeIn');
      next();
    })
    this.$router.afterEach(async () => {
      await this.$nextTick();
      this.handleLanding();
      console.log(this.findImgs(this.$el));
      await Promise.all(this.findImgs(this.$el).map(src => this.loadImage(src).catch(e => console.warn("error loadng image", e))));
      this.loading = false;
      window.requestAnimationFrame(() => element.classList.add('animated', 'fadeIn'));
    });
    //handle landing styles
    window.addEventListener('resize', this.handleLanding);
    this.handleLanding();
  }
}
</script>

<style scoped>
.background {
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: url(./background-light.png);
  background-size: cover;
  opacity: 0.5;
}
</style>