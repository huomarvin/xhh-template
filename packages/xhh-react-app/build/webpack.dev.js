const { merge } = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const base = require("./webpack.base");

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: [path.join(__dirname, "../public")],
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hotOnly: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"), // hmr使用
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
};

module.exports = merge(base, devConfig);
