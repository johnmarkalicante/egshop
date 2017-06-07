(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var webpack = require('webpack');
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    var helpers = require('../config/helpers');
    var fs = require("fs");
    var nodeExternals = require('webpack-node-externals');
    var nodeModules = {};
    fs.readdirSync('node_modules')
        .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
        .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
    module.exports = {
        entry: {
            'app': helpers.root() + '/back/app.server.ts'
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        externals: [nodeExternals({
                whitelist: [
                    'express'
                ]
            })],
        target: 'node',
        node: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty'
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }]
        },
        plugins: [
            new webpack.IgnorePlugin(/\.\/locale$/),
            new webpack.IgnorePlugin(/vertx/),
            new webpack.DefinePlugin({
                $dirname: '__dirname'
            })
        ]
    };
});
//# sourceMappingURL=webpack.common.js.map