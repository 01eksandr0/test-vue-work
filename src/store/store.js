import { createStore } from "vuex";
import allGeo from "./allGeo";
import geoStyles from "./geoStyles";
import activeFunction from "./activeFunction";

export default createStore({
  modules: { allGeo, geoStyles, activeFunction },
});
