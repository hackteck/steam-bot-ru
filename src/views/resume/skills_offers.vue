<template>
  <v-layout column class="py-12 px-5">
    <h2 v-observe class="my-5 display-2">{{$tr.SKILLS_AND_OFFER}}</h2>

    <v-layout row>
      <v-flex
        v-for="(skill, i) in skills"
        :key="i"
        :class="$vuetify.breakpoint.mdAndUp ? `delay-${i+1}s` : `delay-0` "
        v-observe="{ repeat:false, classList:['animated', 'fadeIn'] }"
        md4
      >
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout column justify-center">
            <v-icon x-large class="pb-5 primary--text">{{skill.icon}}</v-icon>
            <div class="headline text-xs-center">{{$tr(skill.headline)}}</div>
          </v-card-title>
          <v-card-text style="color:unset!important" v-html="$tr(skill.text)"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn color="primary" @click="downloadCV()">
      {{$tr.CV}}
      <v-icon right>cloud_download</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      skills: [{
        icon: "format_paint",
        headline: "FRONTEND",
        text: "FRONTEND_DESCRIPTION"
      },
      {
        icon: "build",
        headline: "BACKEND",
        text: "BACKEND_DESCRIPTION"
      },
      {
        icon: "thumb_up",
        headline: "OTHER_SKILLS",
        text: "OTHER_SKILLS_DESCRIPTION"
      }],
    }
  },

  methods:{
    downloadCV(){
      window.location = "/files/CV.pdf";
    }
  },

  created() {
    this.$tr.register({
      SKILLS_AND_OFFER: {
        en: "My skills and offer",
        ru: "Мои навыки и умения"
      },
      //front-end
      FRONTEND: {
        en: "Front-end",
        ru: "Front-end"
      },
      FRONTEND_DESCRIPTION: {
        en: `I specialise in applications written in Vue. 
            My current experience and skills in front-end include: 
            <ul class='descr-list-padding'>
            <li>Proficiency with JavaScript and HTML5 </li>
            <li>Deep knowledge of commonly used modules based on extensive work experience</li>
            <li>Creating self-contained and reusable modules and components</li>
            <li>Ensuring a clear dependency chain, in regard to the app logic as well as the file system</li>
            <li>Ability to provide SEO solutions for single page apps</li>
            <li>Full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple development environments support</li>
            </ul>`,
        ru: `Я специализируюсь в написании приложений на Vue. 
            Мои текущие навыки и умения в области front-end: 
            <ul class='descr-list-padding'>
            <li>Знание JavaScript и HTML5 </li>
            <li>Глубокое знание часто используемых модулей, основанных на обширном опыте работы</li>
            <li>Создание автономных и многоразовых модулей и компонентов</li>
            <li>Обеспечение четкой цепи зависимостей в отношении логики приложения, а также файловой системы</li>
            <li>Предоставление решений для поисковой оптимизации для одностраничных приложений</li>
            <li>Полная интеграция разработки интерфейса с использованием таких инструментов, как Webpack с такими функциями, как автоматическая перезагрузка кода, минимизация кода, поддержка нескольких сред разработки</li>  
            </ul>`
      },
      //back-end
      BACKEND: {
        en: "Back-end",
        ru: "Back-end"
      },
      BACKEND_DESCRIPTION: {
        en: `Nearly every app I have done in the past had the back-end written also by me. In order to improve the development speed, performance and reliability, I have changed language from PHP to Javascript.
            My current experience and skills in back-end include: 
            <ul class='descr-list-padding'>
            <li>Strong proficiency with ES8 and below</li>
            <li>Knowledge of Node.js, MongoDB, request, socket.io, Express framework and many others</li>
            <li>Understanding the nature of asynchronous programming and its quirks and workarounds</li>
            <li>Understanding accessibility and security compliance</li>
            <li>User authentication and authorization between multiple systems, servers, and environments</li>
            <li>Integration of multiple data sources and databases into one system</li>
            </ul>`,
        ru: `Почти во всех приложениях, которые я делал в прошлом, back-end также был написан мною. Чтобы улучшить скорость разработки, производительность и надежность, я сменил язык с PHP на Javascript.
            Мои текущие навыки и умения в области back-end: 
            <ul class='descr-list-padding'>
            <li>Сильное владение ES8 и ниже</li>
            <li>Знание Node.js, MongoDB, request, socket.io, фреймворка Express и много всего прочего</li>
            <li>Понимание характера асинхронного программирования, его причуд и обходных решений</li>
            <li>Понимание доступности и соблюдения требований безопасности</li>
            <li>Аутентификация и авторизация пользователей между несколькими системами, серверами и средами</li>
            <li>Интеграция нескольких источников данных и баз данных в одну систему</li>
            </ul>`
      },
      //other skills
      OTHER_SKILLS: {
        en: "OTHER SKILLS",
        ru: "ДРУГИЕ НАВЫКИ"
      },
      OTHER_SKILLS_DESCRIPTION: {
        en: `I will also mention such skills as:
            <ul class='descr-list-padding'>
            <li>At a good level I know PHP and C#, but I have not used them for more than a year and a half</li>
            <li>Professional cyber security specialist. 
            I like to test, decompile/disassemble web, desktop or mobile application, watching how it works and re-use it in my works. 
            E.g. my banking android-app <a target="_blank" href="https://play.google.com/store/apps/details?id=ua.privatbank.ap24">Privat24</a> use <a target="_blank" href="https://napi1.privatbank.ua/iapi2/ce_get_rates?appkey=afhgfgfdg56ujdj6rtymr67yjrt76tyherhdbryj6r46df57">this link</a> to fetch exchange currency rate</li>
            <li>Very familiar with <a target="_blank" href="https://heroku.com/">Heroku</a>, <a target="_blank" href="https://www.openshift.com/">OpenShift</a>, <a target="_blank" href="https://aws.amazon.com/">Amazon Web Services</a>, <a target="_blank" href="https://www.cloudflare.com/">CloudFlare</a>, <a target="_blank" href="https://www.shodan.io/">Shodan</a></li>
            <li>...and many others. Feel free to ask me any questions</li>
            </ul>`,
        ru: `Также отмечу такие навыки как:
            <ul class='descr-list-padding'>
            <li>На хорошем уровне знаю PHP и C#, но не использую их уже больше полутора лет</li>
            <li>Профессиональный специалист по кибербезопасности. 
            Мне нравится тестировать, декомпилировать/дизассемблировать веб, настольные или мобильные приложения, смотреть, как они работают и повторно использовать их в своих работах.
            Например, мое банковское андроид-приложение <a target="_blank" href="https://play.google.com/store/apps/details?id=ua.privatbank.ap24">Privat24</a> использует <a target="_blank" href="https://napi1.privatbank.ua/iapi2/ce_get_rates?appkey=afhgfgfdg56ujdj6rtymr67yjrt76tyherhdbryj6r46df57">эту ссылку</a> для получения обменного курса валют</li>
            <li>Очень хорошо знаком с <a target="_blank" href="https://heroku.com/">Heroku</a>, <a target="_blank" href="https://www.openshift.com/">OpenShift</a>, <a target="_blank" href="https://aws.amazon.com/">Amazon Web Services</a>, <a target="_blank" href="https://www.cloudflare.com/">CloudFlare</a>, <a target="_blank" href="https://www.shodan.io/">Shodan</a></li>
            <li>...и многие другие. Не стесняйтесь задавать мне какие-либо вопросы</li>
            </ul>`
      },
      //CV
      CV: {
        en: "Download CV",
        ru: "Скачать резюме"
      }
    });
  }
};
</script>