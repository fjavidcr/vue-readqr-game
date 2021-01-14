<template>
  <div class="row justify-content-center">
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <h4>User name</h4>
      <input required v-model="username" type="text" placeholder="Snoopy" />
      <h4>Password</h4>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '@/store/actions/auth'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
