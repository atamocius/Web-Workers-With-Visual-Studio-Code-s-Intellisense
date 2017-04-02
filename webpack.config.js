"use strict";

var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var browserConfig = require("./config/webpack.browser.config");
var workerConfig = require("./config/webpack.workers.config");

module.exports = [
    browserConfig(),
    workerConfig()
];
