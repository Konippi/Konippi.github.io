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
            }
        ]
    }
}

module.exports = webpackConfig;