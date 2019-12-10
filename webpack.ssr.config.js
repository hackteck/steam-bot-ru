const merge = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require("@vue/cli-service/webpack.config.js");

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
    devtool: 'source-map',
    output: { libraryTarget: 'commonjs2' },
    plugins: [
        new VueSSRServerPlugin()
    ]
})