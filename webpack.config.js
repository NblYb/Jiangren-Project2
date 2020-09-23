const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
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
                },
                {
                    test: /\.css/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use:{
                        loader: 'file-loader',
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' })
    ]
};