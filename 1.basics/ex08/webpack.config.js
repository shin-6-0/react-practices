const path = require('path');

module.exports = function(env){
    return{
    mode: "development",
    entry: path.resolve(`src/${env.src}/index.js`), //여러개일 때 파라미터로 받아서 넘기도록설정
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/main.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.js/i,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(c|sa|sc)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false
    }
};
}
