const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    publicPath:"/",
    contentBase: "dist",
    historyApiFallback:true,
    inline:true,
    hot:true,
    port:8080
  },
});
