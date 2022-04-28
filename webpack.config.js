"use strict";
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config({path: "./.env"});

module.exports = (env, argv) => {
  //devtool: "eval-source-map", //para renderizar o codigo exatamente como é (sem utilizar)

  const PRD_MODE = argv.mode

  const config = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "kanban.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      allowedHosts: "all",
      historyApiFallback: true,
      port: 3030,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          use: [PRD_MODE ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif|ico)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[hash]-[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles/[name].css"
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  }

  return config;
};
