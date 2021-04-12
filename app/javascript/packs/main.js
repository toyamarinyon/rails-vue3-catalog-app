import { createApp } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(HelloWorld);
  app.mount("#vue-app");
});
