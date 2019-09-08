const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const config = {};
  config.mode = argv.mode;

  config.entry = [path.join(__dirname, "/src/index.jsx")];
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      }
    ]
  };


  config.plugins = [];

  if (isProd) {
    config.devtool = false;

    config.plugins.push(

      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/SRC_TEMPLATE/index.html"),
        minify: {
          collapseWhitespace: true,
          minifyCSS: true
        },
      }),
    );
  } else {
    config.devtool = "eval";
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/SRC_TEMPLATE/index.html"),
        minify: {
          collapseWhitespace: false,
          minifyCSS: false
        },
      }),

    );



  }

  config.plugins.push(
    new CopyWebpackPlugin(
      [{
        from: path.join(__dirname, "/SRC_TEMPLATE")
      }], {
        ignore: ["*.html", "service-worker.js"]
      }
    )
  );


  config.devServer = {
    port: 4321,
    stats: "minimal"
  };



  return config;
};