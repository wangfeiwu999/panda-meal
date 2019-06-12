import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/reset.css'
import './common/css/common.css'



Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
	router,
	store,
  	render: h => h(App)
}).$mount('#app-view')
