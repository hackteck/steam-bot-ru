<template>
  <svg :viewBox="viewBox">
    <path fill="currentColor" :d="icon[4]" />
  </svg>
</template>

<script>
import brands from "@fortawesome/fontawesome-free-brands"
export default {
  computed: {
    icon() {
      const slotText = this.$slots.default[0].text;
      return brands[slotText].icon;
    },
    viewBox() {
      return `0 0 ${this.icon[0]} ${this.icon[1]}`
    },
  },
  mounted() {
    this.$el.style.height = "1em";
  }
}
</script>