<template>
  <div id="app">
    <navigation />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import { USER_REQUEST } from '@/store/actions/user'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
    }
  },
  created: function () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST)
    }
  }
}
</script>
