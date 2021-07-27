const path = require("path");
const tsConfig = require("../tsconfig.json");
const tsAlias = tsConfig.compilerOptions.paths;

const formatAlias = {};

for (let key in tsAlias) {
  formatAlias[key] = path.join(__dirname, "..", tsAlias[key][0]);
}

module.exports = {
  entry: {
    // vendor: ["react", "react-dom", "react-router", "react-router-dom"],
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    filename: "[name].[contenthash].js",
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
        test: /\.m?[jt]sx?$/,
        use: "react-hot-loader/webpack",
        include: /node_modules/,
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
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      ...formatAlias,
      // "react-dom": "@hot-loader/react-dom",
    },
  },
  // externalsType: "script",
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // "react-dom":
    //   "https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js",
    // react:
    //   "https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js",
  },
  plugins: [],
};
