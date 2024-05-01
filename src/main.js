import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import store from "./store/store";
import App from "./App.vue";
import { router } from "./router/router";

const app = createApp(App);

app.use(router).use(store).mount("#app");
