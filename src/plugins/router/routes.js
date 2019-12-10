export default [
  {
    path: "/login.html",
    component: () => import(/* webpackChunkName: "login" */"../../views/login/index.vue")
  },
  {
    path: "/",
    alias: "/index.html",
    component: () => import(/* webpackChunkName: "index" */"../../views/resume/index.vue")
  },
  {
    path: "/admin.html",
    component: () => import(/* webpackChunkName: "admin" */"../../views/admin/index.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/roulette.html",
    component: () => import(/* webpackChunkName: "roulette" */"../../views/roulette/index/index.vue")
  }
]