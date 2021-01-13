<template>
  <section>
    <navbar class="navigation row">
      <div class="col-auto">
        <router-link class="brand" to="/">
          <img src="../assets/logo.png" class="border-0" width="60px" />&nbsp;
        </router-link>
      </div>
      <div class="col">
        <div class="d-flex justify-content-end" v-if="isAuthenticated" @click="logout">
          <router-link class="my-auto px-4 profile" to="/account" v-if="isProfileLoaded">{{ name }}</router-link>
          <span class="logout paper-btn btn-primary">Logout</span>
        </div>
        <div class="d-flex justify-content-end" v-if="!isAuthenticated && !authLoading">
          <router-link class="paper-btn btn-success" to="/login">Login</router-link>
        </div>
      </div>
    </navbar>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { AUTH_LOGOUT } from '@/store/actions/auth'

export default {
  name: 'Navigation',
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
    ...mapState({
      authLoading: state => state.auth.status === 'loading',
      name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  }
}
</script>
