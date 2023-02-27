const path = require('path');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    
    entry: './src/index',

    output: {
        path: path.resolve(__dirname, 'build'), 
        __filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\\.(ts|js)x?$/, 
                user: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                exclude: /node_modules/, 
            },
            {
                test: /\\.tsx$/,
                use: ['ts-loader'],
                exclude: ['/node_modules/'],
            },
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },

    devServer: {
        static: path.join(__dirname, 'build'),
        port: 7777,
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: `./public/index.html`,
        }),

        new CleanWebpackPlugin(),
    ],
};