import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Storage from 'vue-ls';
var options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};
Vue.use(Storage, options);

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
