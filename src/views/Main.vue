<template>
  <div class="container">
    <loading v-if="loading" />
    <div v-if="isAuthenticated">
      <img alt="Vue logo" src="../assets/logo.png">
      <QrGenerator :url="url"/>
      <pre>Secret Key: {{key}}</pre>
      <pre>params: {{this.$route.query}}</pre>
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to the game !</h1>
      <p>
        When meeting new doge friends is harder than ever, Dogebook closes the
        gap between all paws in the world
      </p>
      <login />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import QrGenerator from '../components/QrGenerator.vue'

import { mapGetters } from "vuex";
import Login from "components/Login";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Login,
    QrGenerator
  },
  data() { 
    return { 
      key: process.env.VUE_APP_KEY,
      url: "code=phqljrwebgwebñg"
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "authStatus"]),
    loading: function() {
      return this.authStatus === "loading" && !this.isAuthenticated;
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
</style>
