const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts/,
        use: ['ts-loader'],
      },
    ]
  },
  plugins: [
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
}