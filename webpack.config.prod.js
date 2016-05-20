// webpack.config.prod.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin("style.css")
  ],
  module: {
    // preLoaders: [
    // { test: /\.jsx?$/, 
    //   loader: 'eslint', 
    //   exclude: /node_modules/ }
    // ],
    loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /fonts/,
        loaders: ['file?name=images/[name].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
    },{
      test: /\.scss$/,
      loaders: ["style", "css", "sass","postcss-loader"]
    },{
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /(node_modules|images)/,
        loaders: ['file?name=fonts/[name].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
    },{ 
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot","babel-loader"]
    }]
  },
    postcss: [ autoprefixer() ]
}