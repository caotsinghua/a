import path from 'path';

export const alias = {
    components: path.resolve(__dirname, '../components'),
    '@': path.resolve(__dirname, '../'),
};
export const exclude = /node_modules/;
export const entry = {
    app: path.resolve(__dirname, '../demo/index.js'),
};
export const loaders = [
    {
        test: /\.jsx?$/,
        include: process.cwd(),
        exclude,
        loader: 'happypack/loader?id=happyBabel',
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
    },
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
    },
    {
        // 字体
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
    },
    {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
    },
    {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
    },
];
