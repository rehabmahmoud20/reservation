import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/index";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";

import store from "./store/store";


createApp(App).use(router).use(bootstrap).use(store).mount("#app");
