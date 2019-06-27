const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

// HTML Webpack Plugin 
const HTMLPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

// Webpack Configuration
module.exports =  {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }]
            }

        ]
    },
    plugins: [HTMLPlugin]
};