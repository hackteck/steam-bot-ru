<template>
  <v-layout
    :style="this.resume.height('bottom')"
    style="width:100%; position:absolute; background-color: rgba(0,0,0,0.3)"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10752.476787178555!2d34.64406346520975!3d47.643250492985565!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1568836860126!5m2!1sru!2sua"
      width="100%"
      frameborder="0"
      class="fill-height"
      style="border:0; position:absolute; z-index: -999"
      allowfullscreen
    ></iframe>
  </v-layout>
</template>

<script>
export default {
  inject: ["resume"]
};
</script>