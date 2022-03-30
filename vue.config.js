module.exports = {
  devServer: {
    port: '7000',
    proxy: {
      '/api':{
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}