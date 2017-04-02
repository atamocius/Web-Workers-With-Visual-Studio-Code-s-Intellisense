"use strict";

var path = require("path");

module.exports = function() {
    return {
        entry: {
            pi: "./js/workers/Pi.worker.ts",
        },

        output: {
            filename: "./js/[name].worker.js",
            path: path.resolve(__dirname, "../dist")
        },

        devtool: "cheap-module-source-map",

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "source-map-loader",
                    enforce: "pre"
                },
                {
                    test: /\.ts$/,
                    include: [
                        path.resolve(__dirname, "../js/workers"),
                        path.resolve(__dirname, "../js/common")
                    ],
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "./js/workers/tsconfig.json"
                    }
                },
            ]
        },

        resolve: {
            extensions: [".ts", ".js"]
        }
    };
};
