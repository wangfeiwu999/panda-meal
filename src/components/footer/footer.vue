<template>
  <div id="p-footer">
    这是脚
  </div>
</template>

<script>
  const footer={
    props: {
     // msg: String
    }
  }
  export default footer;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #p-footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width:100%;
		height: 100px;
    background-color:greenyellow;
  }
</style>
