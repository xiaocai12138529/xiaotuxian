const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/styles/variables.less'),
        path.join(__dirname, './src/styles/mixins.less')
      ]
    }
  }
}
