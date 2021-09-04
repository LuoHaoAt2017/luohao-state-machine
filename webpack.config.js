const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    'index': './src/index.js',
    'client': './client/index.js',
    'form-designer': './client/modules/form-designer/index.js',
    'workflow-designer': './client/modules/workflow-designer/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.(css|less)$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: '低代码产品',
      filename: 'index.html',
      chunks: ['index', 'client']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: '表单设计器',
      filename: 'form-designer.html',
      chunks: ['form-designer']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
      title: '流程设计器',
      filename: 'workflow-designer.html',
      chunks: ['workflow-designer']
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'client': path.resolve(__dirname, './client'),
      'form-detail': path.resolve(__dirname, './client/modules/form-detail'),
      'form-designer': path.resolve(__dirname, './client/modules/form-designer'),
      'workflow-designer': path.resolve(__dirname, './client/modules/workflow-designer')
    },
  },
}