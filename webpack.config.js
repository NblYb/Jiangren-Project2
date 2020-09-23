const path = require('path');

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
    }
};