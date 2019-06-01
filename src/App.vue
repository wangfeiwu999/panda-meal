<template>
  <div id="app">
		<!-- 头部 -->
    <Header></Header>
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
		  <router-view></router-view>
		</keep-alive>
		<!-- 底部 -->
		<Footer/>
			
		
		
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
=={{count}}==
<button @click="increment">加1</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'


export default {
  name: 'app',
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
  }
}
</script>

<style>
	#app {
			font-family: 'Avenir', Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-align: center;
			color: #2c3e50;
			margin-top: 60px;
			max-width:420px;
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
</style>
