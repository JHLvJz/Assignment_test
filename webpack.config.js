const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //추가
const HtmlWebpackPlugin = require("html-webpack-plugin"); //추가
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 웹팩 실행시마다 dist 폴더 정리
    new HtmlWebpackPlugin({
      //index.html 자동 생성되도록 template 옵션 설정
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
