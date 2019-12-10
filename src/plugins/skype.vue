<template>
  <section>
    <div v-show="hide == false" class="skype-button" :class="button" :data-contact-id="cid"></div>
    <div class="skype-chat"></div>
  </section>
</template>

<script>
import loadScript from "../plugins/load-script"
export default {
  props: {
    cid: {
      type: String,
      default: "eugene.krayzie"
    },
    button: {
      type: String,
      default: "bubble"
    },
    autostart: {
      type: Boolean,
      default: false
    },
    hide: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      loggedIn: false,
      chatButton: null
    }
  },
  mounted() {
    window.addEventListener("message", e => {
      //console.log(e.data);
      if (e.data.payload) {
        //receive this message only if user logged in
        if (e.data.payload.refId == "notificationSettings") this.loggedIn = true;
        //chat loaded and active
        if (e.data.payload.refId == "threadNotifications") {
          this.chatButton = document.getElementsByClassName("lwc-chat-button")[0];
          this.$root.$emit("skype", window.SkypeWebControl, this.chatButton, this.loggedIn);
          //click better than SkypeWebControl.SDK.Chat.showChat()
          this.autostart && this.chatButton.click();
        }
      }

      // fix close bug
      if (e.data.action == "bs:hChat") window.SkypeWebControl.SDK.Chat.hideChat();
    });

    //load script
    loadScript("https://swc.cdn.skype.com/sdk/v1/sdk.min.js").catch(e => console.warn("[SKYPE] load eror", e.message))
  }
}
</script>