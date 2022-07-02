const path = require('path');

module.exports = {
    entry: './web/fragment/scripts/fragment-content.ts',
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
        path: path.resolve(__dirname, 'web/fragment/scripts'),
    },
    mode: 'development',
    devtool: 'source-map'
};
