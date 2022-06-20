import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
