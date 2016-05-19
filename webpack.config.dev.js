// webpack.config.js
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
  	'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
  	'./index'
  ], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin("stylesheets/[name].css")
  ],
  module: {
    loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /fonts/,
        loaders: ['url-loader?limit=10000&name=images/[name].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
    },{
      test: /\.scss$/,
      loaders: ["style", "css", "sass","postcss-loader"]
    },{
      test: /\.html$/,
      loaders: ["raw-loader"] 
    },{
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /(node_modules|images)/,
        loaders: ['url-loader?limit=10000&name=fonts/[name].[ext]','image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
    },{ 
        test: /\.js$/,
      	exclude: /node_modules/,
        loaders: ["react-hot","babel-loader"]
    }]
  },
  postcss: [ autoprefixer() ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
