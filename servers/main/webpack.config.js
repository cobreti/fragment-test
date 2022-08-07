const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './web/scripts/fragment.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json'
                    }
                }],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: './web/',
                    from: '**/*.html',
                    to: './'
                }                
            ]
        })
    ]
};
