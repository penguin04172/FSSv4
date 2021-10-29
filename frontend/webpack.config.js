const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'static/js/[name].js',
        path: path.resolve(__dirname, '../')
    }, 

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
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
};