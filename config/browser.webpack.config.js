"use strict";

let path = require("path");
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = () => {
    return {
        entry: "./js/browser/index.ts",

        output: {
            filename: "./js/bundle.js",
            path: path.resolve(__dirname, "../dist")
        },

        devtool: "cheap-module-source-map",

        plugins: [
            new CleanWebpackPlugin(["dist"], {
                root: __dirname,
                verbose: true,
                dry: false
            })
        ],

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
                        path.resolve(__dirname, "../js/browser"),
                        path.resolve(__dirname, "../js/common")
                    ],
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "./js/browser/tsconfig.json"
                    }
                }
            ]
        },

        resolve: {
            extensions: [".ts", ".js"]
        }
    };
};

