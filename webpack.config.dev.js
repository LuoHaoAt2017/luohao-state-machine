const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(x) {
  return path.resolve(__dirname, x)
}

module.exports = merge(config, {
  mode: 'development',
  entry: './example/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: ['vue-loader'],
        include: resolve('./example')
      },
      {
        test: /\.(css|less)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
        include: resolve('./example')
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
        include: resolve('./example')
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
  devServer: {
    port: 9000,
    open: true,
  },
});