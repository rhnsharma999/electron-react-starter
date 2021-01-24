"use strict"
const baseConfig = require("electron-build/webpack.common.config")
const htmlPlugin = require("html-webpack-plugin")
const path = require("path")

const sourceRoot = path.resolve(__dirname, "src")

module.exports = Object.assign(baseConfig, {
  entry: {
    renderer: path.resolve(sourceRoot, "index.tsx"),
  },
  target: "electron-renderer",
  plugins: [new htmlPlugin({ template: path.resolve(sourceRoot, "index.html") })].concat(
    baseConfig.plugins || []
  ),
})
