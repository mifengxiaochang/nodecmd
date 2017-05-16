//var webpack = require('webpack');
var path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        bundle: "./src/index.js",
        // react:"./src/react.js",
       // index:"./module_demo/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"

    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     loader: "eslint-loader"
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader'
                }]
            }]

    },
    context: __dirname,
    devtool: "source-map",
    target: "web",
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
            "node_modules",
            path.resolve(__dirname, "node_modules")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template/_layout.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }

};