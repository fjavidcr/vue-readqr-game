<template>
  <div class="container">
    <img id="qrImage" alt="" srcset="">
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QrGenerator',
  props: {
    url: String
  },
  watch: {
    url (newURL) {
      this.generateQR(newURL, 'qrImage')
    }
  },
  mounted: function () {
    this.generateQR(this.url, 'qrImage')
  },
  methods: {
    generateQR: async (text, element) => {
      var opts = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 0.5,
        margin: 3,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF'
        }
      }
      try {
        let uri = await QRCode.toDataURL(text, opts)
        console.log('qrURI')
        console.log(uri)
        if (element) document.getElementById(element).src = uri
        return uri
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
