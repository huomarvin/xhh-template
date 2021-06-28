const { merge } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prdConfig = {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"), // hmr使用
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(base, prdConfig);
