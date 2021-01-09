<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <QrGenerator :url="url"/>
    <pre>Secret Key: {{key}}</pre>
    <pre>params: {{this.$route.query}}</pre>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import QrGenerator from '../components/QrGenerator.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    QrGenerator
  },
  data() { 
    return { 
      key: process.env.VUE_APP_KEY,
      url: "code=phqljrwebgwebñg"
    }
  },
  mounted () {
    console.log(this.$route.query)
  },
  methods: {
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
