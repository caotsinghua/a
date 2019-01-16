import merge from 'webpack-merge';
import path from 'path';
import baseConfig from './webpack.base';
import webpack from 'webpack';

export default merge(baseConfig, {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        publicPath: '/',
        compress: false,
        port: 9000,
        hot: true,
        quiet: true,
        overlay: {
            errors: true, // 编译出现错误时，错误直接贴到页面上
        },
    },
    devtool: '#source-map',
});
