import { createRouter, createWebHistory } from "vue-router";
import MapPage from "../pages/MapPage.vue";
import TablPage from "../pages/TablPage.vue";
const routes = [
  { name: "map-page", path: "/", component: MapPage },
  { name: "tabl-page", path: "/tabl", component: TablPage },
];

export const router = createRouter({ routes, history: createWebHistory("/") });
