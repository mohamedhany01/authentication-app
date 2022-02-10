const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"),
  { DefinePlugin } = require("webpack");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    filename: "script/main.[contenthash].min.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  mode: "production",
  devtool: false,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        exclude: [path.resolve(__dirname, "../src/images")],
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude: [path.resolve(__dirname, "../src/fonts")],
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/template.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash].min.css",
    }),
    new DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          inlineStyles: {
                            onlyMatchedOnce: false,
                          },
                          removeDoctype: false,
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
};
