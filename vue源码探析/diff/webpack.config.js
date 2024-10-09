const path = require('path');

module.exports = {
    entry: './src/index.mjs',
    output: {
        publicPath: 'xuni',
        filename: 'bundle.js',
    },
    devServer:{
        port:8080,
        // 静态资源文件夹
        contentBase:"www"
    }
};
