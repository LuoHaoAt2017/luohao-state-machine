const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  plugins: [
  ],
  externals: {
  }
}