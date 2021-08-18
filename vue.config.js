const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    port: 9000
  },
  configureWebpack: {
    entry: './example/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.ts/,
          loader: ['ts-loader']
        }
      ]
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