import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/reset.css'
import './common/css/common.css'



Vue.config.productionTip = false;


new Vue({
	router,
	store,
  	render: h => h(App)
}).$mount('#app-view')
