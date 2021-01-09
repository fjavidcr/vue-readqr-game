<template>
  <div class="container">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <pre>{{decodedData}}</pre>
  </div>
</template>

<script>

export default {
  name: 'ReadQR',
  data() { 
    return {
      decodedData: null
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log(`Decoded QR: ${decodedString}`)
      // this.$router.push({ path: '/', params: { datafromcamera: decodedString } })
      this.decodedData = decodedString
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
