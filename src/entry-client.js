import { createApp } from "./main";
const { app, router } = createApp();
router.onReady(() => app.$mount("#app"));

document.documentElement.scrollTop = 0;