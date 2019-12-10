import Vue from "vue"
import Router from "vue-router"
import routes from "./routes"

import store from "../store"
import "./user"

Vue.use(Router);

export default function createRouter() {
  const router = new Router({
    mode: "history",
    base: (typeof location == 'object' && location.protocol == "file:") ? location.pathname.split("/").slice(0, -1).join("/") : "/",
    routes
  });

  //navigation from any href
  if (!Vue.$isServer && typeof window != "undefined") {
    window.addEventListener("click", event => {
      let target = event.target;
      while (target != null && target.tagName != "A") target = target.parentNode;
      if (target && target.href && target.href.includes(location.origin) && target.target != "_blank") {
        event.preventDefault();
        router.push(target.href.replace(location.origin, ""));
      }
    });
  }

  //смотрим переход
  router.beforeEach(async (to, from, next) => {
    //смотрим, есть ли путь
    if (to.matched.length) {
      //проверяем, нужна ли авторизация
      if (to.matched.some(record => record.meta.requiresAuth)) {
        //проверяем на авторизацию
        if (await store.user) next();
        //пользователь не авторизован
        else {
          next({
            path: '/login.html',
            query: { redirect: to.fullPath }
          })
        }
      }
      //авторизация не нужна, продолжаем
      else next();
    }
    //путь не найден
    else {
      console.warn("no route for", to.path);
      //добавляем путь
      router.matcher.addRoutes([{
        path: to.path,
        component: () => import("../../views/404/index.vue")
      }]);
      //и переходим по нему
      next({ path: to.fullPath, replace: true });
    }
  });

  return router;
}