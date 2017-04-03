"use strict";

let browserConfig = require("./config/browser.webpack.config");
let workerConfig = require("./config/workers.webpack.config");

module.exports = [
    browserConfig(),
    workerConfig()
];
