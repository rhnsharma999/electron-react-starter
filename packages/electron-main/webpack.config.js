"use strict"

const path = require("path")
const baseConfig = require("electron-build/webpack.common.config")
const packageRoot = path.resolve(__dirname)

module.exports = Object.assign(baseConfig, {
  entry: {
    main: path.resolve(packageRoot, "src", "index.ts"),
  },
  target: "electron-main",
})
