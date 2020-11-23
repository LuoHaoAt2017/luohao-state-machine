const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    port: 9000
  },
  configureWebpack: {
    entry: './example/main.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'state-machine',
        template: './public/index.html',
        favicon: './public/favicon.ico',
      })
    ]
  }
}