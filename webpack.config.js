const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./client/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./client/public/index.html"),
      favicon: path.resolve("./client/public/favicon.ico"),
      title: "低代码产品",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./client/assets"),
          to: "./assets",
        },
        {
          from: path.resolve(__dirname, "./client/pages"),
          to: "./pages",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
