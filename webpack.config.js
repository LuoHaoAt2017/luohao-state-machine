const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(x) {
  return path.resolve(__dirname, x)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue/,
        use: ['vue-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'luohao-formlogic',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  externals: {
  }
}