import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./page/Home.vue";
import Skills from "./page/Skills.vue";
import Portfolio from "./page/Portfolio.vue";
import Experience from "./page/Experience.vue";
import Contact from "./page/Contact.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faJsSquare,
  faPython,
  faNodeJs,
  faReact,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faEnvelope,
  faJsSquare,
  faPython,
  faNodeJs,
  faReact,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faDatabase,
  faServer,
  faChrome
);

const routes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/portfolio", component: Portfolio },
  { path: "/experience", component: Experience },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
