const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    home: "./src/home/index.js",
    about:"./src/home/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/home/html/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['home', 'commons']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about/html/about.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['about', 'commons']
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader: "url-loader",
            options:{
              limit:10000,
              name:"static/img/[hash:6].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(html|htm)$/i,
        use: ['html-withimg-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          {
            loader: "file-loader",
            options:{
              limit:10000,
              name:"static/fonts/[hash:6].[ext]"
            }
          }
        ]
      }
    ]
  }
};
