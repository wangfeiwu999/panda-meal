<template>
  <div id="app">
		<!-- 头部 -->
    <Header :seller="seller"></Header>
		<!-- 导航栏 -->
		<ul class="nav clearfix">
			<li class="nav-item">
				<router-link to="/goods">商品</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/ratings">评论</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/seller">商家</router-link>
			</li>
		</ul>
		<!-- 不销毁的DOM -->
		<keep-alive>
		  <router-view class="p-content"></router-view>
		</keep-alive>
		<!-- 底部 -->
		<Footer></Footer>
			
		
		
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
=={{count}}==
<button @click="increment">加1</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'


 const App={
  name: 'app',
	data(){
		return {
			seller:{}
		}
	},
  computed: {
    /* count () {
      return this.$store.state.count
    } */
  },
  methods:{
    /* increment() {
        this.$store.commit({
          type: 'increment',
          amount: 1
        })
    } */
  },
  components: {
    // HelloWorld,
    Header,
		Footer
  },
		beforeRouteEnter (to, from, next) {
			// console.log(to, from, next);
			// 在渲染该组件的对应路由被 confirm 前调用
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
		},
		created(){
			this.$http.get("data.json").then((response) => {
				if(response.status=='200' && response.data){
			// console.log('created',response.data);
					this.seller=response.data.seller;
				}
			})
		}
}
export default App;
</script>

<style>
	#app {
			font-family: 'Avenir', Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-align: center;
			color: #2c3e50;
			max-width:420px;
			height: 100%;
			position: relative;
		}
	.nav-item{
		float: left;
		width: 33.33%;
		text-align: center;
		height: 25px;
		line-height: 25px;
	}
	.nav-item .router-link-active{
		display: block;
		width: 100%;
		height: 100%;
		background-color: #FF0000;
	}
/* 	.p-content{
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		padding: 125px 0 100px 0;
	} */
</style>
