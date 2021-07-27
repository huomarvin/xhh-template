const { merge } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const prdConfig = {
  devtool: false,
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"), // hmr使用
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template/index-prd.html"),
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
  // optimization: {
  //   // 模块只导出被使用的成员
  //   usedExports: true,
  //   // 尽可能合并每一个模块到一个函数中
  //   // concatenateModules: true,
  //   // 压缩输出结果
  //   minimize: true,
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    // "react-dom":
    //   "https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js",
    // react:
    //   "https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js",
  },
};

module.exports = merge(base, prdConfig);
