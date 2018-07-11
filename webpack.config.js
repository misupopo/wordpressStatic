const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin('[name].css')

module.exports = [
    {
        entry: {
            main: './src/js/app.js',
        },
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'dist/js'),
            publicPath: '/js/',
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {},
                    },
                },
            ],
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    output: {},
                    eslint: {
                        configFile: '.eslintrc.yml',
                        emitErrors: true,
                        failOnError: true,
                    },
                },
            }),
            /* use jQuery as Global */
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        resolve: {
            extensions: ['.js'],
        }
    },
    {
        entry: {
            main: "./src/scss/main.scss"
        },
        output: {
            path: path.resolve(__dirname, "dist/css"),
            publicPath: '/css/',
            filename: "[name].css"
        },
        module: {
            rules: [
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: [
                        {
                            loader: 'url-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: extractSass.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
                }
            ]
        },
        plugins: [
            extractSass
        ],
        resolve: {
            extensions: ['.css', '.js']
        },
    }

]
