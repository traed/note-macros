const path = require('path');

module.exports = function(env, args) {
  return {
    entry: './src/index.js',
    optimization: {
      minimize: env.prod
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: env.prod ? 'production' : 'development',
    watch: !env.prod
  }
};