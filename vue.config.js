const path = require('path')

module.exports = {
  devServer: {
    port: '9999',
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, 'src/styles/theme.less')}";`,
        }
      },
    },
  },
}