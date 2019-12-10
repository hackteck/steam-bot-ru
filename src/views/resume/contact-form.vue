<template>
  <v-layout wrap class="align-md-center">
    <v-layout justify-center row class="mx-1">
      <!-- CONTACT FORM -->
      <v-col v-if="messageSent === false" cols="12" md="8" lg="7" xl="6">
        <v-card v-observe="['animated', 'fadeIn']" class="fill-height">
          <v-form ref="form">
            <v-card-title primary-title>{{$tr.HAVE_A_QUESTION}}</v-card-title>
            <v-card-text class="row ml-0">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required]"
                  :label="$tr.YOUR_NAME"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :rules="[rules.email]"
                  :label="$tr.YOUR_EMAIL"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  rows="7"
                  outlined
                  no-resize
                  :rules="[rules.required]"
                  :label="$tr.MESSAGE"
                ></v-textarea>
              </v-col>
              <div class="text-center pb-5" style="width:100%">
                <v-btn color="primary" style="width:75%" @click="submit()">{{$tr.SUBMIT}}</v-btn>
              </div>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
      <!-- MESSAGE SENDING... -->
      <v-col v-if="messageSent === undefined" cols="12" md="8" lg="7" xl="6">
        <v-card class="fill-height">
          <v-layout align-center justify-center fill-height>
            <v-progress-circular :size="100" :width="10" color="primary" indeterminate></v-progress-circular>
          </v-layout>
        </v-card>
      </v-col>
      <!-- MESSAGE SENT -->
      <v-col v-if="messageSent === true" cols="12" md="8" lg="7" xl="6">
        <v-card class="fill-height">
          <v-card-title primary-title>{{$tr.MESSAGE_SENT}}</v-card-title>
          <v-card-text class="row ml-0" style="color:unset!important;">{{$tr.MESSAGE_SENT_TEXT}}</v-card-text>
        </v-card>
      </v-col>
      <!-- VISIT CARD -->
      <v-flex xs12 md4 lg4 xl3 class="pa-3">
        <v-card v-observe="['animated', 'fadeIn']">
          <v-card-title primary-title>{{$tr.EVGENIY_MNATSAKANOV}}</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(contact, i) in contacts" :key="i">
                <!-- ICON -->
                <v-list-item-action>
                  <v-icon v-if="contact.icon" class="primary--text">{{contact.icon}}</v-icon>
                  <brands
                    v-if="contact.brand"
                    class="primary--text"
                    style="font-size: x-large;"
                  >{{contact.brand}}</brands>
                </v-list-item-action>
                <!-- DESRIPTION -->
                <v-list-item-content>
                  <v-list-item-title>
                    <a
                      v-if="contact.href"
                      :href="contact.href"
                      :target="contact.target"
                    >{{contact.text}}</a>
                    <span v-else>{{$tr(contact.text)}}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <!-- OPEN SKYPE CHAT -->
            <!--span v-if="$vuetify.breakpoint.mdAndUp" v-observe="openSkypeChat"></span-->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" bottom :timeout="2000" style="bottom: 50px">
      {{$tr.CHECK_ALL_FIELDS_AND_CORRECT_ANY_ERRORS}}
      <v-btn text @click="snackbar = false">{{$tr.CLOSE}}</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      name: undefined,
      email: undefined,
      message: undefined,
      messageSent: false,
      //contacts
      contacts: [
        {
          icon: "phone",
          href: "tel:+380990451514",
          text: "+38 (099) 045-15-14"
        },
        {
          icon: "email",
          href: "mailto:eugene.krayzie@gmail.com?subject=Greetings&body=Hello!",
          text: "eugene.krayzie@gmail.com"
        },
        {
          brand: "faSkype",
          href: "skype:eugene.krayzie?call",
          text: "eugene.krayzie"
        },
        {
          brand: "faTelegram",
          href: "tg://resolve?domain=hackteck",
          text: "@hackteck"
        },
        {
          brand: "faLinkedin",
          href: "https://www.linkedin.com/in/hackteck/",
          text: "hackteck",
          target: "_blank"
        },
        {
          brand: "faGithub",
          href: "https://github.com/hackteck",
          text: "hackteck",
          target: "_blank"
        },
        {
          brand: "faVk",
          href: "https://vk.com/krayzie",
          text: "https://vk.com/krayzie",
          target: "_blank"
        },
        {
          icon: "place",
          text: "VISIT_CARD_LOCATION"
        }
      ],
      //rules
      rules: {
        required: value => !!value || this.$tr.REQUIRED,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || this.$tr.INVALID_EMAIL
        }
      },
      //snackbar
      snackbar: false
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.messageSent = undefined;
        try {
          await axios.post("/resume", { name: this.name, email: this.email, message: this.message });
          this.messageSent = true;
        }
        catch (e) {
          alert("Ошибка отправки: " + e.message);
          this.messageSent = false;
        }
      }
      else this.snackbar = true;
    },
    openSkypeChat(isVisible) {
      this.needOpenSkypeChat = isVisible;
      if (isVisible && window.SkypeWebControl && this.chatButton) this.chatButton.click()
    }
  },
  created() {
    this.$tr.register({
      //CONTACT FORM
      HAVE_A_QUESTION: {
        en: "Have a question?",
        ru: "Есть вопрос?"
      },
      REQUIRED: {
        en: "Required",
        ru: "Обязательное поле"
      },
      INVALID_EMAIL: {
        en: "Invalid e-mail",
        ru: "Неверный e-mail"
      },
      YOUR_NAME: {
        en: "Your Name",
        ru: "Ваше имя"
      },
      YOUR_EMAIL: {
        en: "Your e-mail",
        ru: "Ваш e-mail"
      },
      MESSAGE: {
        en: "Message",
        ru: "Сообщение"
      },
      SUBMIT: {
        en: "Submit",
        ru: "Отправить"
      },
      CLOSE: {
        en: "Close",
        ru: "Закрыть"
      },
      CHECK_ALL_FIELDS_AND_CORRECT_ANY_ERRORS: {
        en: "Please check all fields and correct any errors",
        ru: "Пожалуйста, проверьте все поля и исправьте ошибки"
      },
      MESSAGE_SENT: {
        en: "Message sent!",
        ru: "Сообщение отправлено"
      },
      MESSAGE_SENT_TEXT: {
        en: "I will contact you as soon as possible.",
        ru: "Я свяжусь с Вами при первой возможности"
      },
      //VISIT CARD
      VISIT_CARD_LOCATION: {
        en: "Marganets, Ukraine",
        ru: "г.Марганец, Украина"
      }
    });
  },
  mounted() {
    this.$root.$on("skype", (SkypeWebControl, chatButton) => {
      this.chatButton = chatButton;
      this.needOpenSkypeChat && this.openSkypeChat(true);
    });
  }
};
</script>