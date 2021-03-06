const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './modules/web/fragment/src/scripts/fragment-content.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.fragment.json'
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
        path: path.resolve(__dirname, './dist/web/fragment'),
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: './modules/web/fragment/src/',
                    from: '**/*.html',
                    to: './'
                }                
            ]
        })
    ]

};
