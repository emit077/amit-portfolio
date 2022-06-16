import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
  },
  {
    path: "/blog-layout",
    name: "blog-layout",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/BlogLayout.vue"),
    children: [
      //subscription
      {
        path: "/post/:post_id",
        name: "post",
        meta: { requiresAuth: true, title: "post", show_back_btn: false },
        component: () =>
          import(/* webpackChunkName: "post" */ "@/views/Post.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
