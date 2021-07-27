const { merge } = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"), // hmr使用
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
};

module.exports = merge(base, devConfig);
