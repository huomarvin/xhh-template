const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tsConfig = require("../tsconfig.json");
const tsAlias = tsConfig.compilerOptions.paths;
// const {
//   createLoadableComponentsTransformer,
// } = require("typescript-loadable-components-plugin");

const formatAlias = {};

for (let key in tsAlias) {
  formatAlias[key] = path.resolve(__dirname, "..", tsAlias[key][0]);
}

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // ts-loader 与 @component/loadable 有冲突，无法实现code splitting
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      //   options: {
      //     getCustomTransformers: (program) => ({
      //       before: [createLoadableComponentsTransformer(program, {})],
      //     }),
      //   },
      // },
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      ...formatAlias,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
