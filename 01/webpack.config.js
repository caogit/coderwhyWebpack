const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyPlugin  = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader/dist/index')

module.exports = {
    mode:'development',
    devtool:'source-map',
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'js/build.js',
        // assetModuleFilename: 'images/[hash][ext][query]'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // loader:"css-loader"
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test:/\.less$/,
                use:[
                "style-loader",
                "css-loader",
                "less-loader"
                ]
            },
            // {
            //     test:/\.(png|jpg)$/,
            //     use:[{
            //         loader:"url-loader",
            //         options:{
            //             name:'img/[name]_[hash:6].[ext]',
            //             esModule:false,
            //             limit:100*1024

            //         }
            //     }],
            //     type: 'javascript/auto'
            // },
            {
                test:/\.(jpg|png)$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 10  * 1024
                    }
                },
                generator: {
                    filename: 'img/[name]_[hash:6][ext]'
                }
            },
            // {
            //     test:/\.(eot|ttf|woff|woff2)$/,
            //     loader:'file-loader',
            //     options:{
            //         name:'font/[name]_[hash:6].[ext]',
            //             esModule:false,
            //     },
            //     type: 'javascript/auto'

            // }
            {
                test:/\.(eot|ttf|woff|woff2)$/,
                type:'asset/resource',
                generator:{
                    filename:'font/[name]_[hash:6][ext]'
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            title:'啊哈哈哈'
        }),
        new DefinePlugin({
            BASE_URL:"'./'"
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:'./public',
                    to:'./',
                    globOptions:{
                        ignore:['**/index.html']
                    }
                }
            ]
        }),
        new VueLoaderPlugin()
    ]
} 