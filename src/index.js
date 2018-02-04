// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//require(`quasar/dist/quasar.${__THEME}.css`);
import Vue from "vue";
import App from "./App";
import router from "./router";
import Quasar from "quasar-framework";
import 'font-awesome/css/font-awesome.css';
import "quasar-extras/roboto-font";
import "quasar-extras/material-icons";
import "./assets/quasar.css";

window.__THEME = "mat";
Vue.use(Quasar);
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: "#q-app",
    router,
    render: h => h(App),
    created: {}
  });
});
