import path from 'path';
import os from 'os';
import { alias, loaders, entry } from './config';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HappyPack from 'happypack';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

export default {
    entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]-[hash].bundle.js',
        publicPath: './',
        chunkFilename: '[id].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.json'],
        alias,
    },
    module: {
        rules: loaders,
    },
    plugins: [
        new HappyPack({
            id: 'happyBabel',
            loaders: [
                {
                    loader: 'babel-loader',
                },
            ],
            threadPool: happyThreadPool,
            verbose: true,
        }),
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../demo/index.html'),
            filename: 'index.html',
            chunks: ['app'],
        }),
        new FriendlyErrorsWebpackPlugin(),
    ],
};
