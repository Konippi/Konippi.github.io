const path = require('path');

const webpackConfig = {
    entry: './src/ts/index.ts',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public/dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.(scss)$/,
                user: [
                    "style-loader", // css in js -> html
                    "css-loader",   // css -> css in js
                    "sass-loader"   // sass -> css
                ]
            }
        ]
    }
}

module.exports = webpackConfig;