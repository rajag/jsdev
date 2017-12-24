
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default{
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry:{
        vendor: path.resolve(__dirname,'src/vendor'),
        main: path.resolve(__dirname,'src/index')
    },
    target: 'web',
    output:{
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
      //  filename:'[name].js'
      finename:'[name].[chunkhash].js'

    },

    plugins: [
        //Generate External css file with a hash in the file name
        new ExtractTextPlugin('[name].[contenthash].css'),
        //Hash the files using md5
        new WebpackMd5Hash(),
        //use commonchunkplugin to create seperate bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //create Html file  that include reference to bundle.js
        new HtmlWebpackPlugin({
            template:'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              },
            inject:true
        }),
        //Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        //Minify Js
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loaders:['babel']},
           // {test:/\.css$/,loaders:['style','css']}
           {test:/\.css$/,loader:ExtractTextPlugin.extract('css?sourceMap')}
        ]

    }
};