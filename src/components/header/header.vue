<template>
  <div id="p-header">
		<!-- 内容 -->
    <div class="content-wrapper">
			{{seller.name}}
		</div>
		<!-- 公告 -->
    <div class="bulletin-wrapper">公告</div>
		<!-- 遮罩层 -->
    <div class="mask">遮罩层</div>
  </div>
</template>

<script>
  const header={
    props: {
     seller: {
			 type: Object,
			 required: true,
		 },
    },
		created(){
			console.log(1,this.seller);
		},
  }
  export default header;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #p-header{
    position: relative;
    overflow: hidden;
    color: #fff;
    background-color: rgba(7,17,27,.5);
  }
</style>
