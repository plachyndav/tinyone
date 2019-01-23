const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackplugin = require('copy-webpack-plugin');
const fs = require('fs');
const generateTemplates = ()=> {
    const files = fs.readdirSync(path.resolve(__dirname, './src'));
    const htmls = files.filter(file => /\.html$/.test(file));
    return htmls.map(template => new HtmlWebpackPlugin({
        filename: template,
        template: path.resolve(__dirname, `./src/${template}`),
    }));
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: path.resolve(__dirname, './src/index.html'),
        // }),
        ...generateTemplates(),
        new CopyWebpackplugin(
            [
                { from: './img', to: 'img' }
            ]
        )
    ],
    entry: [
        path.resolve(__dirname, './src/js/index.js'),
        path.resolve(__dirname, './src/styles/normalize.css'),
        path.resolve(__dirname, './src/styles/style.scss')
        // './js/index.js',
        // './styles/style.scss'
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '../'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};