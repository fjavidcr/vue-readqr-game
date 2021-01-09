const path = require('path')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/store/actions'),
        services: path.resolve(__dirname, 'src/services'),
        assets: path.resolve(__dirname, 'src/assets')
      }
    }
  }
}
