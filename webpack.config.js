const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
                {
                    test: /\.js/,
                    use: {
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-react'],
                        },
                    },    
                }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' })
    ]
};