const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');



module.exports = {
    entry: './src/index.js',
      output: {
    path: __dirname,
    filename: './dist/app.bundle.js'
  },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
         {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        stats: "errors-only",
        compress: true,
        port: process.env.PORT,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    plugins: [new HtmlWebpackPlugin({
         template: './src/index.html'
    }),
     new ExtractTextPlugin('style.css')
    ]
}
