<template>
	<div id="p-header">
		<!-- 内容 -->
		<div class="content-wrapper clearfix">
			<div class="content-left pull-left">
				<img class="avatar" :src="seller.avatar" />
			</div>
			<div class="content-right pull-left">
				<div class="p-name-wrap">
					<span class="brand-icon"></span>
					<span class="p-name">{{seller.name}}</span>
				</div>
				<p class="p-description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
				<div class="p-support clearfix" v-if="seller.supports">
					<span class="pull-left">{{seller.supports[0].description}}</span>
					<button class="pull-right" @click="toggleCover(true)">{{seller.supports.length}}</button>
				</div>
			</div>
		</div>
		<!-- 公告 -->
		<div class="bulletin-wrapper" @click="toggleCover(true)">{{seller.bulletin}}</div>
		<!-- 遮罩层 -->
		<transition name="fade">
			<div class="cover" v-show="showCover">
				<h4 class="p-cover-name">{{seller.name}}</h4>
				<div>评星组件</div>
				<div class="title">
				  <div class="line"></div>
				  <div class="text">优惠信息</div>
				  <div class="line"></div>
				</div>
				<ul>
					<li v-for="(support,index) in seller.supports"></li>
				</ul>
				 <!--<div @click="toggleCover(false)" class="detail-close">
				  <i class="icon-close"></i>
				</div> -->
				<button @click="toggleCover(false)">关闭</button>
			</div>
	    </transition>
		
	</div>
</template>

<script>
	const header = {
		data() {
			return {
				showCover: false,
			}
		},
		props: {
			seller: {
				type: Object,
				required: true,
			},
		},
		methods: {
			toggleCover(flag) {
				this.showCover = flag;
			}
		},
		created() {
			console.log(1, this.seller);
		},
	}
	export default header;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#p-header {
		overflow: hidden;
		color: #fff;
		background-color: rgba(7, 17, 27, .5);
	}

	.content-wrapper {
		padding: 24px 12px 18px 24px;
	}

	.content-left {
		width: 64px;
		height: 64px;
		margin-right: 10px;
	}

	.content-right {
		width: 200px;
	}

	.content-left .avatar {
		display: block;
		width: 100%;
		height: 100%;
	}

	.brand-icon {
		display: inline-block;
		width: 28px;
		height: 18px;
		background-image: url(../../assets/brand@2x.png);
		background-size: 30px 18px;
		vertical-align: top;
	}

	.p-name {
		display: inline-block;
		width: 162px;
		height: 18px;
	}

	.bulletin-wrapper {
		background: rgba(7, 17, 27, .2);
		color: #FFFFFF;
		height: 20px;
		line-height: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cover {
		position: absolute;
		z-index: 100;
		/* opacity: 0.9; */
		background-color: #7E8C8D;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>
