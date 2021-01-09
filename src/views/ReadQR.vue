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
</style>
