<template>
  <div id="app">
    <Header></Header>
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
=={{count}}==
<button @click="increment">加1</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header/header.vue'

export default {
  name: 'app',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods:{
    increment() {
        this.$store.commit({
          type: 'increment',
          amount: 1
        })
    }
  },
  components: {
    HelloWorld,
    Header
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
</style>
