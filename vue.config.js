const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api1': {
        target: "http://localhost:5000",
        /* changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
        changeOrigin默认值为true */
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      'api2': {
        target: "http://localhost:5001",
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
})
