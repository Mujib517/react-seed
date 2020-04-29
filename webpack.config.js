var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: __dirname + "/index.template.html"
    })]
};

//
