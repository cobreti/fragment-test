const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './modules/web/main/src/scripts/fragment.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.main.json'
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
        path: path.resolve(__dirname, 'dist/web'),
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: './modules/web/main/src/',
                    from: '**/*.html',
                    to: './'
                }                
            ]
        })
    ]
};
