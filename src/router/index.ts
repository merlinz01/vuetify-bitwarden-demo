import { createRouter, createWebHistory } from "vue-router";
import VuetifyOverriddenLogin from "../views/VuetifyOverridenLogin.vue";
import VuetifyDefaultLogin from "@/views/VuetifyDefaultLogin.vue";
import NativeLogin from "../views/NativeLogin.vue";
import "@mdi/font/css/materialdesignicons.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/vue",
    },
    {
      path: "/vuetify-default",
      name: "vuetify-default",
      component: VuetifyDefaultLogin,
    },
    {
      path: "/vuetify-overridden",
      name: "vuetify-overridden",
      component: VuetifyOverriddenLogin,
    },
    {
      path: "/native",
      name: "login",
      component: NativeLogin,
    },
  ],
});

export default router;
