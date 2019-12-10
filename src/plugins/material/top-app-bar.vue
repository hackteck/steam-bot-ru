<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <button
          class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded"
        >menu</button>
        <span class="mdc-top-app-bar__title">
          <slot name="title">{{test}}</slot>
        </span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <slot name="actions">#actions</slot>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from "@material/top-app-bar";
export default {
  props: {
    fixed: {
      type: Boolean,
      //default: true
    }
  },

  mounted() {
    const topAppBar = new MDCTopAppBar(this.$el);
  }
}
</script>