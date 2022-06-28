const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyPlugin  = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader/dist/index')
const Webpackbar = require('webpackbar')

module.exports = {
    mode:'development',
    devtool:'source-map',
    devServer:{
        hot:true,
        port:9999,
        open:true,
        // compress:true // 默认启用

    },
    resolve:{
        extensions:['.vue','.js'], // 这个意思就是引入的时候就不需要些后缀，会自动去这里匹配
        alias:{
            '@':path.resolve(__dirname,'./src')
        }
    },
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
        new VueLoaderPlugin(),
        new Webpackbar()
    ]

} 