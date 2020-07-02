// vue.config.js
module.exports = {
  devServer: {
    port: 8000,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://www.skypixel.com/',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false,
}
