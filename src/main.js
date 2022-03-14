import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faArrowLeftLong);

import router from "./router";
import "./assets/tailwind.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
