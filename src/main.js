import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import MintUI from 'mint-ui'
import App from './App.vue'
import './common/css/reset.css'
import './common/css/common.css'



Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
// Vue.use(MintUI);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-view')


// render选项的作用和template类似,都是指定根组件的模板
// $mount()和el选项作用类似,都是指定根组件的挂载点
