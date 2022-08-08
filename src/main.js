import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import i18n from '@/core/i18n/i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import toast from "vue-toastification";
import myToast from "./core/toas.options";


// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css'
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(AOS.init({
  once: true,
}));
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(toast,{
  transition: "Vue-Toastification__bounce",
  maxToasts: 30,
  newestOnTop: true
});
Vue.use(myToast);


import ApiService from './services/api.service'
ApiService.init(process.env.VUE_APP_BASE_URL)

export const bus = new Vue();


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
