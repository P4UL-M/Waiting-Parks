const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Waiting-Parks/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
})

/*
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Waiting-Parks/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
})
*/
