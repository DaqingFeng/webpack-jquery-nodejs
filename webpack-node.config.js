var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

module.exports = {
    target: 'node',
    devtool: 'inline-source-map',


    entry: { node: ['./service/App.js'] },

    output: {
        chunkFilename: './nodebundle/[name].js',
        filename: './nodebundle/[name].bundle.js',
    },

    // keep node_module paths out of the bundle keep size down
    externals: getExternals(),

    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
    ]
}

function getExternals() {
    const nodeModules = fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    return nodeModules.reduce((ext, mod) => {
        ext[mod] = 'commonjs ' + mod
        return ext
    }, {})
}

