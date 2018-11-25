// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import css from './assets/reset.css'
import Axios from 'axios'
import Qs from 'qs'
import { Loading } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Loading.directive)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios
Vue.prototype.Host = './buidu_music_api' 
Vue.config.productionTip = false
Vue.prototype.$loading = Loading.service

Axios.interceptors.request.use(function (config) {
    if(config.type === 'post'){
    	config.data = Qs.stringify(config.data)
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

Axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
