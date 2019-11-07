module.exports = {
  'configureWebpack': {
    'resolve': {
      'alias': {
        '@': '/Users/amasho/.ghq/github.com/amasho/vuex-inquiry-example/src'
      }
    }
  },
  'css': {
    'loaderOptions': {
      'scss': {
        'prependData': '\n          @import "~@/scss/_variables.scss";\n          @import "~@/scss/_mixins.scss";\n        '
      }
    }
  },
  'devServer': {
    'host': 'localhost:8080'
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
