<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <QrGenerator :url="url"/>
    <pre>Secret Key: {{key}}</pre>
    <!-- <qrcode-stream @decode="onDecode"></qrcode-stream> -->
    <pre>params: {{this.$route.query}}</pre>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import QrGenerator from './components/QrGenerator.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 
    QrGenerator
  },
  data() { 
    return { 
      key: process.env.VUE_APP_KEY,
      url: "https://fjavidcr.github.io/#/?r=hello"
    }
  },
  mounted () {
    console.log(this.$route.query.r)
  },
  methods: {
    onDecode (decodedString) {
      console.log(decodedString)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
