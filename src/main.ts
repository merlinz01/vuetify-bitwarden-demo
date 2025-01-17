import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

app.use(
  createVuetify({
    components,
    directives,
  })
);
app.use(createPinia());
app.use(router);

app.mount("#app");
