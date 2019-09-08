/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = {};
  config.mode = argv.mode;

  config.devtool = isProd ? false : "source-map";


  config.entry = [path.join(__dirname, "/src/index.js")];
  config.output = {
    path: path.join(__dirname, "/dist"),
    filename: isProd ? "[name].[hash].js" : "[name].js"
  };

  config.resolve = {
    alias: {
      appRoot: path.join(__dirname, "/src")
    },
    extensions: ['*', '.js', '.jsx']
  };

  config.module = {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    {
      test: /\.css$/,
      use: [isProd ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader"
      }
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=100000",
    }
    ]
  };


  config.plugins = [];

  config.plugins.push(
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/HTML_TEMPLATE/index.html"),
      minify: {
        collapseWhitespace: isProd,
        minifyCSS: isProd
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? "[name].[hash].css" : "[name].css"
    }),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin(
      [{
        from: path.join(__dirname, "/HTML_TEMPLATE")
      }], {
        ignore: ["*.html", "service-worker.js"]
      }
    ),
  );


  config.devServer = {
    port: 5000,
    stats: "minimal"
  };

  return config;
};
