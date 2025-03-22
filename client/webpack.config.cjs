/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { keyValue } = require("./globalPathMapper.cjs");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.join(__dirname, "src", "main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].js`,
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass"),
              sourceMap: true,
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "resources/fonts/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".svg"],
    alias: keyValue,
    fullySpecified: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
